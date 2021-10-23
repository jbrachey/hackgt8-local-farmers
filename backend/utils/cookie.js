const cookieProps = {
    key: 'express-cookie',
    secret: 'COOKIE_SECRET',
    options: {
        httpOnly: true,
        signed: true,
        secure: true,
        maxAge: (10 * 365 * 24 * 60 * 60)
    }
}

module.exports = cookieProps