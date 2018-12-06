const fs = require('fs');
// const pdf = require('html-pdf');
const options = {
    format: 'A4'
};
const http = require('http');
http.get('http://localhost:3000', res => {
    if (res.statusCode === 200) {
        const a = res.pipe(fs.createWriteStream(`./b.html`));
  res.pipe(process.stdout)
        // const html = fs.readFileSync('./index.html', 'utf-8');
        // console.log(html)
        // pdf.create(html, options).toFile('./index.pdf', function (err, res) {
        //     if (err) return console.log(err);
        //     console.log(res); // { filename: '/app/businesscard.pdf' }
        // });
    }
})