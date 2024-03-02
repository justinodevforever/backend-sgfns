const { Router } = require("express");
const { createNotify, getNotify } = require("../controllers/controllerNotify");

const router = Router();

router.post("/notify", createNotify);
router.get("/notify", getNotify);

module.exports = router;
