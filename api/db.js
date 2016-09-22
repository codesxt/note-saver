var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/note-saver', function(){
	console.log('MongoDB connected.');
});
module.exports = mongoose;
