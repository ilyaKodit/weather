const express = require('express');

const City = require('../models/city');

const router = express.Router();

router.get('/city', async (req, res) => {
    const data = await City.find();

    res.status(200).json({data});
});

router.post('/city/add', async (req, res) => {
    const { city } = req.body;

    const searchCity = await City.findOne({city});
    if (searchCity) {
        const updateCity = await City.findOneAndUpdate({city}, {
            count: searchCity.count + 1,
        },
        {
            new: true,
            upsert: true,
        });
        res.status(200).json({updateCity});
    } else {
        const newCity = new City({
            city,
            count: 1,
        })
        newCity.save().then(data => {
            res.status(200).json({data});
        });
    }
});

module.exports = router;