const jsonwebtoken = require('jsonwebtoken')

const jwtSecret = 'JWT_SECRET'

const encodeJWT = (data) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(data, jwtSecret, (err, token) => {
            if (err)
                reject(err)
            else
                resolve(token || '')
        })
    })
}

const decodeJWT = (jwt) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(jwt, jwtSecret, (err, data) => {
            if (err)
                reject(err)
            else 
                resolve(data)
        })
    })
}

module.exports = {
    encodeJWT,
    decodeJWT
}
