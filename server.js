const {
    createServer
} = require('http')
const {
    parse
} = require('url')
const next = require('next')
const fs = require('fs')
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
            pathname,
            query
        } = parsedUrl

        if (req.method === 'POST' && pathname === '/preview') {
            let buffer = [];
            req.on('data', chunk => {
                buffer.push(chunk);
            })
            req.on('end', () => {
                buffer = JSON.parse(buffer.toString());
                app.renderToHTML(req, res, '/preview', buffer).then(data => {
                    const options = {
                        format: 'A4'
                    };
                    data = data.replace(/\/_next\/static\/css\/styles.chunk.css/, all => {
                        return `${config.host}:${config.port}${all}`
                    })

                    res.writeHead(200, {
                        "content-type": 'application/pdf; charset=utf-8'
                    })
                    pdf.create(data, options).toStream(function (err, stream) {
                        stream.pipe(res);
                    });

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