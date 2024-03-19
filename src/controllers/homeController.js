const connection = require('../config/database');
const { use } = require('../routes/web');

const getHomePage = (req, res) => {


    return res.render('home.ejs')
}

const getTestPage = (req, res) => {
    res.send('<h1 style="color:red;">Test page and css by NodeJs with Minh </h1>')
}

const getViewPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    // console.log(">>> req.body: ", req.body)

    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    //let {email, name, city} = req.body

    console.log(">>>> email = ", email, 'name = ', name, 'city = ', city)

    connection.query(
        `INSERT INTO
        Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function(err, results){
            //console.log(results)
            res.send('Create user succeed !')
        }
    )
    // res.send('Creat a new user')
}


module.exports = {
    getHomePage, getTestPage, getViewPage, 
    postCreateUser
}