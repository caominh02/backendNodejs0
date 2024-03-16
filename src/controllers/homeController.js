const connection = require('../config/database');
const { use } = require('../routes/web');

const getHomePage = (req, res) => {
    // process data
    // call model
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function(err, results, fields) {
            users = results;
            console.log(">>> Results =", results);

            // console.log(">>> Check users: ", users);
            res.send(JSON.stringify(users))
        }    
    );
}

const getTestPage = (req, res) => {
    res.send('<h1 style="color:red;">Test page and css by NodeJs with Minh </h1>')
}

const getViewPage = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomePage, getTestPage, getViewPage
}