const express = require('express')
const farmRouter = express.Router()
const db = require('../../db')
const middleware = require('../../utils/middleware')

/*Farms {
    id,
    name,
    location (address, city, state, zipcode),
    info,
    sustainability,
    hours,
    farm username,
    phone,
    posts: [Posts]
}*/

farmRouter.post('/create', (req, res) => {
    const farm = req.body
    if (!farm) {
        return res.status(401).json({
            error: 'Missing Information'
        })
    }
    // make username unique
    if (db.farms.find(f => f.farmUserName === farm.farmUserName)) {
        return res.status(401).json({
            error: 'Farm with same name + location already exists'
        })
    }
    farm.id = db.next()
    db.farms.push(farm)
    db.print()
    return res.status(200).end()
})

farmRouter.get('/get', (req, res) => {
    return res.json(db.farms).end()
}) 

farmRouter.get('/get/:location', (req, res) => {
    // also check for nearby (not just same zipcode)
    const location = req.params.location
    return res.json(db.farms.filter(f => f.location === location)).end()
})

farmRouter.get('/get/:name', (req, res) => {
    const name = req.params.name
    return res.json(db.farms.filter(f => f.name.toLowerCase().includes(name.toLowerCase()))).end()
})

farmRouter.get('/search', (req, res) => {
    const name = req.query.name
    const location = req.query.location
    let farms = db.farms
    if (name) {
        farms = farms.filter(f => f.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (location) [
        farms = farms.filter(f => f.location === location)
    ]
    return res.json(farms).end()
})

farmRouter.get('/getInfo/:farmUserName', (req, res) => {
    const farmUserName = req.params.farmUserName
    console.log(db.farms.find(f => f.farmUserName === farmUserName))
    return res.json(db.farms.find(f => f.farmUserName === farmUserName)).end()
})

farmRouter.post('/follow/:farmUserName', middleware, (req, res) => {
    const user = res.sessionUser
    if (!user.follows)
        user.follows = []
    const farmUserName = req.params.farmUserName
    user.follows.push(farmUserName)
    res.status(200).end()
})

/*
Blocked Endpoints

farmRouter.put('/update', (req, res) => {
    const farm = req.body.farm
    const existing = db.farms.find(f => f.location === farm.location && f.name === farm.name)
    const id = existing.id
    if (existing) {
        db.farms.delete(existing)
        farm.id = id
        db.farms.push(farm)
    } else {
        console.log('Farm updating failed because farm does not exist')
    }
    return res.status(200).end()
})

farmRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.farms.delete(f => f.id === id)
    return res.status(200).end()
})*/


module.exports = farmRouter