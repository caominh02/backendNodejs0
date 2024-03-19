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
module.exports = {
    getHomePage, getTestPage, getViewPage
}