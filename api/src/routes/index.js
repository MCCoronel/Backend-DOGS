const { Router } = require("express");
require("dotenv").config();

// Importar todos los routers;
const dogsRoutes = require("./router_dogs");
const temperamentsRoutes = require('./router_temperaments');

const router = Router();

router.use("/dogs", dogsRoutes);
router.use("/temperaments", temperamentsRoutes);

module.exports = router;
