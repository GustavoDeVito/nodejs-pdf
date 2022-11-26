const express = require('express')
const app = express()
const port = 3000

const Pdfkit = require('./models/pdfkit')
const ChartJS = require('./models/chartjs')
const PdfkitChart = require('./models/pdfkit-chart')

app.get('/pdfkit', (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment;filename=pdfkit.pdf',
  })

  Pdfkit(
    (chunk) => stream.write(chunk),
    () => stream.end()
  )
})

app.get('/chartjs', async (req, res) => {
  const chartjs = await ChartJS()

  console.log(chartjs)

  res.send('Generated chart')
})

app.get('/pdfkit-chartjs', (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment;filename=pdfkit-chartjs.pdf',
  })

  PdfkitChart(
    (chunk) => stream.write(chunk),
    () => stream.end()
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})