const { ChartJSNodeCanvas } = require('chartjs-node-canvas')

const width = 400 //px
const height = 400 //px
const backgroundColour = 'white' // Uses https://www.w3schools.com/tags/canvas_fillstyle.asp
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, backgroundColour })

const chartjs = async () => {
    const configuration = {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Users',
                    data: [50, 60, 70, 180],
                },
            ],
        },
    }

    const image = await chartJSNodeCanvas.renderToBuffer(configuration)

    const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration)

    const stream = chartJSNodeCanvas.renderToStream(configuration)

    return {
        image,
        dataUrl,
        stream
    }
};

module.exports = chartjs