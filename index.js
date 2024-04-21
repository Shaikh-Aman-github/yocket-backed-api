const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Routes
const getCitiesAndVehicleRoutes = require('./routes/getCitiesAndVehicle');
const getfindCriminalRoutes = require('./routes/findCriminal');


const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use the route
app.use('/getCitiesAndVehicle', getCitiesAndVehicleRoutes);
app.use('/getfindCriminalRoutes', getfindCriminalRoutes);



app.get('/', (req, res) => {
    res.send('Welcome to server');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
