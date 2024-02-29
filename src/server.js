const express = require('express')
const app = express()
const port = 3000

const path = require('path');
// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// khai bao route
// moi route tuong tu nhu 1 page
app.get('/', (req, res) => {
  res.send('Hello World with Minh!')
})
app.get('/viewPage', (req, res) => {
  // res.send('Check View Page with Minh!')
  res.render('sample.ejs')
})


app.get('/testPage', (req, res) => {
  res.send('<h1 style="color:red;">Test page and css by NodeJs with Minh </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})