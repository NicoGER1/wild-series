const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const { browse } = require("../../controllers/programsActions");

router.get("/programs", browse);

module.exports = router;
