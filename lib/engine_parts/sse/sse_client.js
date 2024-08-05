//這邊是sse,client的使用方式

let EventSource = require('eventsource')
let es = new EventSource('http://localhost:3000/sse/connect')
es.addEventListener('eventName', function (e) {
  console.log(e.data)
})
