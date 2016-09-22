var db = require('../db');
var ObjectId = db.Schema.ObjectId;

var noteSchema = new db.Schema({
  owner: {
    type: ObjectId,
    unique: false,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = db.model('Note', noteSchema);
