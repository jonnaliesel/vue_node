const app = require('express')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = 5000

function getRandomValueArray() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100 ))
}

io.on('connection', (socket) => {
    console.log('connected')

    async function sendData() {
        while(true) {
            await new Promise((resolve) => setTimeout(resolve, 1000))
        
            const data = await getRandomValueArray()

            console.log('Sending:' +  JSON.stringify(data, null, 2))
            socket.broadcast.emit('newChartData', data)
        }
    }

    sendData()
})

http.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})