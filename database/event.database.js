class EventModel {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        actorId INTEGER,
        repoId INTEGER,
        created_at datetime default current_timestamp,
        FOREIGN KEY (actorId) REFERENCES actors(id),
        FOREIGN KEY (repoId) REFERENCES repos(id))`;
    return this.dao.run(sql);
  }

  create(type, actorId, repoId) {
    return this.dao.run(
      `INSERT INTO events (type, actorId, repoId)
        VALUES (?, ?, ?)`,
      [type, actorId, repoId]
    );
  }

  getAllEvents() {
    return this.dao.all(`SELECT * FROM events`);
  }

  getActor(actorId) {
    return this.dao.all(`SELECT * FROM events WHERE actorId = ?`, [actorId]);
  }

  deleteAllEvents() {
    return this.dao.run(`DELETE FROM events`);
  }
}

module.exports = EventModel;
