const db = require('../db')
const cookieProps = require('./cookie')
const {decodeJWT} = require('./jwt')

const middleware = async (req, res, next) => {
    const jwt = req.signedCookies[cookieProps.key]
    if (!jwt) {
        return res.status(401).json({
            error: 'No JWT in request'
        })
    }
    const data = await decodeJWT(jwt)
    if (!data || !data.id) {
        return res.status(401).json({
            error: 'Invalid JWT'
        })
    }
    const user = db.users.find(u => u.id === data.id)
    if (!user) {
        return res.status(401).json({
            error: 'No such user found'
        })
    }
    res.sessionUser = user
    next()
}

module.exports = middleware