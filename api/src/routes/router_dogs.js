const { Router } = require("express");
const { handlersDogs } = require("../handlers");
const router = Router();

//Todas las rutas aqui comienzan con /dogs
router.get("/", handlersDogs.getDogs);

router.get("/:id", handlersDogs.getDogsById);

router.post("/", handlersDogs.postDog);

module.exports = router;
