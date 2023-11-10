const express = require('express')
const app = express()
const port = 3000


// khai bao route
app.get('/', (req, res) => {
  res.send('Hello World with Minh!')
})
app.get('/viewPage', (req, res) => {
  res.send('View Page with Minh!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})