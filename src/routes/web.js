// khai bao routes cua express
const express = require('express');
const router = express.Router();
const { getHomePage, getTestPage, getViewPage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')

// router.get('/', (req, res) => {
//     //xu ly data
//     res.send('Hello World with Minh! test nodemon')
//   })
// demo
router.get('/testPage', getTestPage)
router.get('/viewPage', getViewPage)
// 

router.get('/', getHomePage);
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)


router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)
module.exports = router; //export default