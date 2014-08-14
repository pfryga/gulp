var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('compress', function() {
	gulp.src('scripts/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['compress']);