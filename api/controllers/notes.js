var mongoose = require('mongoose');
var Note = require('../models/note');

module.exports.getNotes = function(req, res){
  if(!req.payload._id){
    //There is no user ID in payload
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  }else{
    //There is user ID in payload
    var owner_id = req.payload._id;
    Note
    .find({owner: owner_id})
    .exec(function(err, notes){
      res
      .status(200)
      .json(notes);
    });
  }
};

module.exports.addNote = function(req, res){
  if(!req.payload._id){
    //There is no user ID in payload
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  }else{
    //There is user ID in payload
    // TODO: Fill in note insertion

  }
};
