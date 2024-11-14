// console.log("this is app file")

// let x = require("./demo1")
// let y = x();

// let a = require("fs");

/*
    there are 3 types of module

    1. core
        fs, crypto, path, util, body-parser, url, 

    2. local 
        create by us

    3. public module            npmjs.com

*/
const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('resume.pdf'));

doc

  .fontSize(25)
  .text('Resume', 100, 100);


doc.end();