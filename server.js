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
const app = next({
    dev
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

        if (req.method === 'POST' && pathname === '/preview') {
            let buffer = [];
            req.on('data', chunk => {
                buffer.push(chunk);
            })
            req.on('end', () => {
                buffer = JSON.parse(buffer.toString());

                console.log(buffer.type);
                app.renderToHTML(req, res, '/preview', buffer).then(data => {

                    if (buffer.type === 'pdf') {
                        const options = {
                            format: 'A4'
                        };
                        data = staticHtmlFormatter(data, './_next\/static\/css\/styles.chunk.css')

                        res.writeHead(200, {
                            "content-type": 'application/pdf; charset=utf-8'
                        })
                        pdf.create(data, options).toStream((err, stream) => {
                            !err && stream.pipe(res);
                        });
                    }

                    if (buffer.type === 'html') {
                        res.writeHead(200, {
                            "content-type": 'text/html; charset=utf-8'
                        })
                        res.end(staticHtmlFormatter(data, './_next\/static\/css\/styles.chunk.css'))

                    }
                    if (buffer.type === 'picture') {
                        res.writeHead(200, {
                            "content-type": 'image/png; charset=utf-8'
                        })
                        const gm = require('gm').subClass({
                            imageMagick: true
                        });
                        const options = {
                            format: 'A4'
                        };
                        data = staticHtmlFormatter(data, './_next\/static\/css\/styles.chunk.css')


                        pdf.create(data, options).toStream((err, stream) => {
                            gm(stream).command('convert').write('./a.png', (err) => {
                                if (!err) {
                                    console.log('success');
                                } else {
                                    throw err
                                }
                            })
                        });

                    }
                })
            })
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(config.port, err => {
        if (err) throw err
        console.log(`> Ready on ${config.host}:${config.port}`)
    })
})