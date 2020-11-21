const WebSocket = require('ws');


const url = 'ws://localhost:8080'
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('hi from client') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${JSON.stringify(error)}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}