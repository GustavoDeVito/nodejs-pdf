const PDFDocument = require('pdfkit')

function Pdfkit(data, end) {
    const doc = new PDFDocument();

    doc.on('data', data)
    doc.on('end', end)
  
    doc
      .fontSize(25)
      .text('PdfKit...', 100, 100);
  
    doc.end();
}

module.exports = Pdfkit;