let PDFDocument = require('pdfkit');
let fs = require('fs');
let doc = new PDFDocument;

let res = doc.pipe(fs.createWriteStream('./pdfKit/file.pdf')); 'This text is to write in pdf'
doc.pipe(res);                                       // HTTP response

// add stuff to PDF here using methods described below...

// finalize the PDF and end the stream
doc.end();
