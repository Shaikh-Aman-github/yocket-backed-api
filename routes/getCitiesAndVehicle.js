// routes/getCitiesAndVehicle.js

const express = require('express');
const router = express.Router();
const { getCities, getVehicles, getCriminal, getCops } = require('../controllers/CityVehicleController');

// Routes for cities
router.get('/cities', getCities);

// Routes for vehicles
router.get('/vehicles', getVehicles);

// Routes for criminal
router.get('/criminal', getCriminal);

// Routes for cops
router.get('/cops', getCops);

module.exports = router;

