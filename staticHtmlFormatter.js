const fs = require('fs');
module.exports = (html, cssUrl) => {
  const css = fs.readFileSync(cssUrl, 'utf-8');
  const data = html.replace(/\<style[\s\S]+?\<\/style>/, () => {
    return `
        <style jxs="true">
            body {
                margin: 0 px;
                padding: 0 px;
                display: flex;
                justify-content: center;
                overflow: hidden;
            }, 
            #__next {
                width: 60%;
            }
            ${css}
        </style>
        `
  })
  return data.replace(/(\<link[\s\S]+?\>)|(\<script[\s\S]+?\>)/g, () => "");
}