var express = require("express");
var router = express.Router();
var eraseController = require("../controllers/events");

// Routes related to event
router.post("/", eraseController.addEvent);

router.get("/", eraseController.getAllEvents);

router.get("/actors/:actorId", eraseController.getByActor);

module.exports = router;
