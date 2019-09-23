const Promise = require("bluebird");
const AppDAO = require("../dao");
const EventModel = require("../database/event.database");

const dao = new AppDAO("database.sqlite3");
const event = new EventModel(dao);

var getAllEvents = (req, res) => {
  event.getAllEvents().then(data => {
    return res.status(200).send({
      status: 200,
      data
    });
  });
};

var addEvent = (req, res) => {
  const { type, actorId, repoId } = req.body;
  if (!type || !actorId || !repoId) {
    return res.status(400).send({
      status: 400,
      message: "Please provide all details"
    });
  }
  event.create(type, actorId, repoId).then(data => {
    return res.status(201).send({
      status: 201,
      data
    });
  });
};

var getByActor = (req, res) => {
  const { actorId } = req.params;
  event.getActor(actorId).then(data => {
    if (data.length === 0) {
      return res.status(404).send({
        status: 404,
        message: 'No event for this actor'
      });
    }
    return res.status(200).send({
      status: 200,
      data
    });
  });
};

var eraseEvents = (req, res) => {
  event.deleteAllEvents().then(data => {
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
