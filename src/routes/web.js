// khai bao routes cua express
const express = require('express');
const router = express.Router();
const { getHomePage, getTestPage, getViewPage, postCreateUser } = require('../controllers/homeController')
// router.get('/', (req, res) => {
//     //xu ly data
//     res.send('Hello World with Minh! test nodemon')
//   })

router.get('/', getHomePage);
router.get('/testPage', getTestPage)
router.get('/viewPage', getViewPage)

router.post('/create-user', postCreateUser)
module.exports = router; //export default