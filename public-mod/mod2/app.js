let pdf = require("pdfkit");
let fs = require("fs")
let doc = new pdf();
doc.pipe(fs.createWriteStream('application.pdf'));
doc.fontSize(25).text('Application', {align : "center", valign: 'top'});
doc.fontSize(16).text("Subject : Leave Application")

doc.end();