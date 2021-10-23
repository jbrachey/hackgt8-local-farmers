const express = require('express')
const farmRouter = express.Router()
const db = require('../../db')

/*Farms {
    id,
    name,
    location (zipcode),
    user id (producer)
    posts: [Posts]
}*/

farmRouter.post('/create', (req, res) => {
    const farm = req.body.farm
    if (!farm) {
        console.log("Failed to Create Farm")
    }
    if (db.farms.find(f => f.name === farm.name && f.location === farm.location)) {
        console.log("Farm Already Exists")
    }
    farm.id = db.next()
    db.farm.push(user)
    res.statusCode(200)
})

farmRouter.get('/get/:location', (req, res) => {
    // also check for nearby (not just same zipcode)
    const location = req.params.location
    res.json(db.farms.filter(f => f.location === location))
})

farmRouter.get('/get/:name', (req, res) => {
    const name = req.params.name
    res.json(db.farms.filter(f => f.name === name))
})

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
    res.statusCode(200)
})

farmRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.farms.delete(f => f.id === id)
    res.statusCode(200)
})


module.exports = farmRouter