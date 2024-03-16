require('dotenv').config();
const express = require('express'); // common js

const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')
const connection = require('./config/database')


// IMPORT EXPRESS FROM 'EXPRESS'; // ES MODULE
const app = express() // APP EXPRESS
const port = process.env.PORT || 8888; // PORT => HARDCODE
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);



// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(">>> Results =", results);
  }
  
);

// khai bao route
// moi route tuong tu nhu 1 page
app.use('/', webRouters);
app.use('/ver1', webRouters);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})