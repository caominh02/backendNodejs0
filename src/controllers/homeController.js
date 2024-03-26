const connection = require('../config/database');
const {getAllUsers, getUserByID, updateUserByID} = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    
    // console.log('>>> check row: ', results)
    let results = await getAllUsers()
    return res.render('home.ejs', {listUsers: results})
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userID = req.params.id

    let user = await getUserByID(userID)
    
    res.render('edit.ejs', {userEdit:user})
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
    // connection.query(
    //     `INSERT INTO
    //     Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results){
    //         //console.log(results)
    //         res.send('Create user succeed !')
    //     }
    // )
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city],

    )
    console.log(">>> check results: ", results)
    res.send('Create user succeed !')

}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    let userID = req.body.userID
    console.log(">>>> email = ", email, 'name = ', name, 'city = ', city, 'UserId: ', userID)
    await updateUserByID(email, name, city, userID)
    //res.send('Update user succeed !')
    res.redirect('/')
}
module.exports = {
    getHomePage, getTestPage, getViewPage, getCreatePage, getUpdatePage,
    postCreateUser, postUpdateUser,
    
}