const { Router } = require("express");
const { handlersTemperaments } = require("../handlers");
const router = Router();

//Todas las rutas aqui comienzan con /temperaments
router.get("/", handlersTemperaments.getTemperaments);

module.exports = router;
