var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function(task){
  require('./gulp/' + task)
})
var gulp = require('gulp')
gulp.task('dev', ['watch:js', 'dev:server'])
