const { Router } = require('express');
const temperamentsRoutes = Router();
const getTemperaments = require('../controllers/getTemperaments')


temperamentsRoutes.get("/" , getTemperaments )

module.exports = temperamentsRoutes;