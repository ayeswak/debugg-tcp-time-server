const net = require('net')
const server = net.createServer(function (socket) {
  // socket handling logic
  let date = new Date();
  socket.end(`{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} {date.getHours()}:{date.getMinutes()}\r\n`);
})
server.listen(31337)
