const cookieProps = {
    key: 'express-cookie',
    secret: 'COOKIE_SECRET',
    options: {
        signed: true,
        maxAge: (10 * 365 * 24 * 60 * 60),
        path: '/'
    }
}

module.exports = cookieProps