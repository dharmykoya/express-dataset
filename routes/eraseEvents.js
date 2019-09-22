var express = require("express");
var router = express.Router();
var eraseController = require("../controllers/events");
// Route related to delete events

router.delete("/", eraseController.eraseEvents);

module.exports = router;
