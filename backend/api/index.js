const express = require('express')
const router = express.Router()

router.use('/auth/', require('./auth'))
router.use('/users/', require('./users'))
router.use('/farms/', require('./farms'))
router.use('/chats/', require('./chats'))
router.use('/posts/', require('./posts'))


module.exports = router