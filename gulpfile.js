var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('static/scss/pong.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('static/css/'))
})

gulp.task('watch', function(){
  gulp.watch('static/scss/pong.scss', ['sass']); 
  // Other watchers
})