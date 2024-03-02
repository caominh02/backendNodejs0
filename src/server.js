const express = require('express')
const path = require('path');
require('dotenv').config();


// IMPORT EXPRESS FROM 'EXPRESS'; // ES MODULE
const app = express() // APP EXPRESS
const port = process.env.PORT || 8888; // PORT => HARDCODE
const hostname = process.env.HOST_NAME;



// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// khai bao route
// moi route tuong tu nhu 1 page
app.get('/', (req, res) => {
  res.send('Hello World with Minh! test nodemon')
})
app.get('/viewPage', (req, res) => {
  // res.send('Check View Page with Minh!')
  res.render('sample.ejs')
})


app.get('/testPage', (req, res) => {
  res.send('<h1 style="color:red;">Test page and css by NodeJs with Minh </h1>')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})