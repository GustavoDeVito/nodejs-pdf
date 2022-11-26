const PDFDocument = require('pdfkit')
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const chart = async () => {
  const chartJSNodeCanvas = new ChartJSNodeCanvas({ type: 'png', width: 800, height: 600 });

  const configuration = {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Users',
        data: [50, 60, 70, 180]
      }]
    }
  };

  const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);

  return imageBuffer
}

async function PdfkitChart(data, end) {
  const graphic = await chart()

  const doc = new PDFDocument();

  doc.on('data', data)
  doc.on('end', end)

  doc
    .fontSize(25)
    .text('PdfKit...', 100, 100);

  doc.image(graphic)

  doc.end();
}

module.exports = PdfkitChart;