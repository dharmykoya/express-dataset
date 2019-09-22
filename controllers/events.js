const Promise = require("bluebird");
const AppDAO = require("../dao");
const EventModel = require("../database/event.database");

const dao = new AppDAO("../database.sqlite3");
const event = new EventModel(dao);

var getAllEvents = () => {};

var addEvent = () => {};

var getByActor = () => {};

var eraseEvents = (req, res) => {
  event.deleteAllEvents().then(data => {
    console.log(3, data);
    return res.status(200).send({
      status: 200,
      data: "all events deleted"
    });
  });
};

module.exports = {
  getAllEvents: getAllEvents,
  addEvent: addEvent,
  getByActor: getByActor,
  eraseEvents: eraseEvents
};
