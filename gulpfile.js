var gulp = require('gulp'),
	uglify = require('gulp-uglify'), // minifies javascript
	minifyCSS = require('gulp-clean-css'), // minifies css
	autoprefixer = require('gulp-autoprefixer'); // adds vendor prefixes


gulp.task('scripts', function(){
	gulp.src('app/js/*.js') //use 'js/**/*.js' for any subdirectories of "js/"
		.pipe(uglify()) //pipes into the uglify method
		// .pipe(rename('app.min.js')) //pipes into the rename method
		.pipe(gulp.dest('dist/js')) //pipes the result into the specified dir
});

gulp.task('viewScripts', function(){
	gulp.src('app/views/js/*.js')
		.pipe(uglify())
		// .pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist/views/js'))
});

gulp.task('styles', function(){
	gulp.src('app/css/*.css')
		.pipe(minifyCSS()) // pipes into the the minifyCSS method
		// .pipe(rename('styl.min.css')) //pipes into the rename method
		.pipe(gulp.dest('dist/css')) //pipes the result into the specified dir
});

gulp.task('viewStyles', function(){
	gulp.src('app/views/css/*.css')
		.pipe(minifyCSS()) // pipes into the the minifyCSS method
		// .pipe(rename('styl.min.css')) //pipes into the rename method
		.pipe(gulp.dest('dist/views/css')) //pipes the result into the specified dir
});

gulp.task('pages', function(){
	gulp.src('app/*.html')
		.pipe(gulp.dest('dist/'))
});

gulp.task('viewPages', function(){
	gulp.src('app/views/*.html')
		.pipe(gulp.dest('dist/views/'))
});

gulp.task('images', function(){
	gulp.src('app/img/*.*')
		.pipe(gulp.dest('dist/img'))
});

gulp.task('viewImages', function(){
	gulp.src('app/views/images/*.*')
		.pipe(gulp.dest('dist/views/images'))
});

gulp.task('autoprefixer', () =>
    gulp.src('app/views/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/views/css'))
);

gulp.task('watch', function(){ //watches specifies directories for changes
	gulp.watch('app/js/*.js', ['scripts']);
	gulp.watch('app/views/js/*.js', ['viewScripts']);
	gulp.watch('app/css/*.css', ['styles']);
	gulp.watch('app/views/css/*.css', ['viewStyles']);
	gulp.watch('app/*.html', ['pages']);
	gulp.watch('app/img/*.*', ['images']);
	gulp.watch('app/views/images/*.*', ['viewImages']);
});

gulp.task('default', ['scripts', 'viewScripts', 'styles', 'viewStyles', 'pages', 'viewPages', 'images', 'viewImages', 'autoprefixer', 'watch']);
