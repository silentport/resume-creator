const fs = require('fs');
module.exports = (html, cssUrl, width) => {
    const css = fs.readFileSync(cssUrl, 'utf-8');
    const data = html.replace(/\<style[\s\S]+?\<\/style>/, () => {
        return `
        <style>
            body {
                margin: 0px;
                padding: 0px;
                display: flex;
                justify-content: center;
                overflow: hidden;
            }
            div#__next {
                width: ${width};
            }
            ${css}
        </style>
        `
    })
    return data.replace(/(\<link[\s\S]+?\>)|(\<script[\s\S]+?\>)/g, () => "");
}