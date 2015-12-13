// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch')
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var open = require('gulp-open');

// Task
gulp.task('server', ['watch', 'open'], function() {
	
	
	// configure nodemon
	return nodemon({
		// the script to run the app
		script: 'server.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src(['*.js', 'controllers/**/*.js'])
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
	
})

gulp.task('watch', function() {
	  watch('*.js', function (events, done) {
       console.log('Wtch change');
    });
});

gulp.task('open', function(){
  var options = {
    uri: 'http://localhost:3000',
  
  };
  gulp.src(__filename)
  .pipe(open(options));
});

gulp.task('default', ['server'])
	