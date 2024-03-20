const connection = require('../config/database');
// const { get } = require('../routes/web');
const {getAllUsers} = require('../services/CRUDService')
// const { use } = require('../routes/web');

const getHomePage = async (req, res) => {
    
    // console.log('>>> check row: ', results)
    let results = await getAllUsers()
    return res.render('home.ejs', {listUsers: results})
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
const getTestPage = (req, res) => {
    res.send('<h1 style="color:red;">Test page and css by NodeJs with Minh </h1>')
}

const getViewPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    // console.log(">>> req.body: ", req.body)

    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    //let {email, name, city} = req.body

    console.log(">>>> email = ", email, 'name = ', name, 'city = ', city)


    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city],

    )
    // console.log(">>> check results: ", results)
    res.send('Create user succeed !')


}


module.exports = {
    getHomePage, getTestPage, getViewPage, getCreatePage,
    postCreateUser
}