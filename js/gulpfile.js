var gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

//Image Task
//Compress
gulp.task('image', function(){
	gulp.src('../Images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('Imagemin'))
});

gulp.task('default', ['image']
);
