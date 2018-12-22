const {
    createServer
} = require('http')
const {
    parse
} = require('url')
const next = require('next')
const fs = require('fs')
const staticHtmlFormatter = require('./staticHtmlFormatter');
const pdf = require('html-pdf');
const dev = process.env.NODE_ENV !== 'production'
console.log('dev: ', dev)
const app = next({
    dev: false
})
const handle = app.getRequestHandler()
const config = require('./config')

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const {
            pathname
        } = parsedUrl
        console.log("路径：", pathname);
        if (req.method === 'POST' && pathname === '/resume_creator/preview') {
            let buffer = [];
            req.on('data', chunk => {
                buffer.push(chunk);
            })
            req.on('end', () => {
                buffer = JSON.parse(buffer.toString());
                app.renderToHTML(req, res, '/preview', buffer).then(data => {

                    if (buffer.type === 'pdf') {
                        data = staticHtmlFormatter(data, './_next\/static\/css\/styles.chunk.css', '100%');
                        const options = {
                            format: 'A4',
                            phantomPath: require('phantomjs').path
                        };

                        res.writeHead(200, {
                            "content-type": 'application/pdf; charset=utf-8'
                        })
                        pdf.create(data, options).toStream((err, stream) => {
                            !err && stream.pipe(res).on('error', (err) => {
                                console.log('写入错误');
                            });
                        });

                    }
                    if (buffer.type === 'html') {

                        data = staticHtmlFormatter(data, './_next\/static\/css\/styles.chunk.css', '80%');
                        data = data.replace(/\<img src="data:image\/(\w+);base64,([\s\S]+?)"/, (all, type, base64) => {
                            const _base64 = Buffer.from(base64, 'base64').toString('base64')
                            return `<img src="data:image/${type};base64,${_base64}" alt='照片'`
                        })

                        res.writeHead(200, {
                            "content-type": 'text/html; charset=utf-8'
                        })
                        res.write(Buffer.from(data))
                        res.end();
                    }
                })
            })

        } else {
            app.renderToHTML(req, res, '/', {}).then(data => {
                res.writeHead(200, {
                    "content-type": 'text/html; charset=utf-8'
                })
                res.write(Buffer.from(data))
                res.end();
            })

            // handle(req, res, parsedUrl)
        }
    }).listen(config.port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${config.port}`)
    })
})