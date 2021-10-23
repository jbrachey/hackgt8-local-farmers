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
    const farm = req.body
    if (!farm) {
        return res.status(401).json({
            error: 'Missing Information'
        })
    }
    // make username unique
    if (db.farms.find(f => f.name === farm.name && f.location === farm.location)) {
        return res.status(401).json({
            error: 'Farm with same name + location already exists'
        })
    }
    farm.id = db.next()
    db.farm.push(user)
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
    return res.json(db.farms.filter(f => f.name === name)).end()
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