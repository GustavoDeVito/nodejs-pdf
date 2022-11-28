const PDFDocument = require('pdfkit-table')

async function PdfkitTable(data, end) {
    const doc = new PDFDocument();

    doc.on('data', data)
    doc.on('end', end)

    const table = {
        title: "Title",
        subtitle: "Subtitle",
        headers: ["Country", "Conversion rate", "Trend"],
        rows: [
            ["Switzerland", "12%", "+1.12%"],
            ["France", "67%", "-0.98%"],
            ["England", "33%", "+4.44%"],
        ],
    };

    await doc.table(table, {
        width: 300,
    });

    doc.end();
}
module.exports = PdfkitTable