// controller/CityVehicleController.js

const { City, Vehicle, Criminal, Cops } = require('../models/CityAndVehicle');

const cities = [
    new City(1,'Yapkashnagar', 'the Neon Oasis', 60, 'https://i.ibb.co/Ldb6czc/image.png', 'Glowing alleys and rooftop races, powered by solar energy.'),
    new City(2,'Lihaspur', 'the Misty Labyrinth', 50, 'https://i.ibb.co/CQMsp32/image.png', 'Ancient temples shrouded in fog, whispers of forgotten tech.'),
    new City(3,'Narmis City', 'the Steel Jungle', 40, 'https://i.ibb.co/dJctxRW/image.png' ,'Towering skyscrapers and hidden underground networks.'),
    new City(4,'Shekharvati','the Sun-Kissed Valley', 30, 'https://i.ibb.co/YNgkNQv/image.png', 'Rolling hills and forgotten mining tunnels.'),
    new City(5,'Nuravgram', 'the Quirky Village', 20, 'https://i.ibb.co/VCYGNVt/image.png', 'Talking robots and malfunctioning AI guardians.')
];

const vehicles = [
    new Vehicle(1,'EV Bike', 60, 2, 'https://i.ibb.co/VT48Mwb/image.png'),
    new Vehicle(2,'EV Car', 100, 1, 'https://i.ibb.co/g7RX1qJ/image.png'),
    new Vehicle(3,'EV SUV', 120, 1, 'https://i.ibb.co/4t9rCdJ/image.png')
];

const criminal = [
    new Criminal(1,'Criminal', 'https://i.ibb.co/85n6Fjj/image.png','A notorious criminal escape artist')
];

const cops = [
    new Cops(1,'Cop 1','https://i.ibb.co/dgDpbyj/image.png'),
    new Cops(2,'Cop 2','https://i.ibb.co/K7cLVSb/image.png'),
    new Cops(3,'Cop 3','https://i.ibb.co/zh5kndY/image.png')
];

// Controller logic to get cities
const getCities = (req, res) => {
    res.json(cities);
};

// Controller logic to get vehicles
const getVehicles = (req, res) => {
    res.json(vehicles);
};

// Controller logic to get Criminal
const getCriminal = (req, res) => {
    res.json(criminal);
};

// Controller logic to get Criminal
const getCops = (req, res) => {
    res.json(cops);
};
module.exports = { getCities, getVehicles, getCriminal, getCops };
