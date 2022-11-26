const PDFDocument = require('pdfkit')

function Default(data, end) {
    const doc = new PDFDocument();

    doc.on('data', data)
    doc.on('end', end)
  
    doc
      .fontSize(25)
      .text('Default...', 100, 100);
  
    doc.end();
}

module.exports = Default;