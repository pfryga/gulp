var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch');

gulp.task('compress', function() {
	gulp.src('scripts/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('scripts/*.js', ['compress']);
});

gulp.task('default', ['compress']);