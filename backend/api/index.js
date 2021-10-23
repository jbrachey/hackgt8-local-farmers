const express = require('express')
const router = express.Router()
const middleware = require('./middleware')

router.use('/auth/', require('./routes/auth'))
router.use('/users/', require('./routes/users'))
router.use('/farms/', middleware, require('./routes/farms'))
router.use('/chats/', middleware, require('./routes/chats'))
router.use('/posts/', middleware, require('./routes/posts'))


module.exports = router