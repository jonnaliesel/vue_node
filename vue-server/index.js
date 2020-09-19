const app = require('express')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = 5000

io.on('connection', (socket) => {
    console.log('connected')
})

http.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})