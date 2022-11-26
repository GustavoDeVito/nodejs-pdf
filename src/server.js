const express = require('express')
const app = express()
const port = 3000

const Default = require('./models/default')
const ChartJS = require('./models/chartjs')

app.get('/default', (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment;filename=default.pdf',
  })

  Default(
    (chunk) => stream.write(chunk),
    () => stream.end()
  )
})

app.get('/chartjs', async (req, res) => {
  const chartjs = await ChartJS()

  console.log(chartjs)

  res.send('Generated chart')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})