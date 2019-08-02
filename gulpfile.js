// Initialize modules
/*
    npm install gulp-sass
    npm install gulp-cssnano
    npm install gulp-concat
    npm install gulp-uglify
*/
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
        .pipe(sass()) // compile SCSS to CSS
        .pipe(cssnano()) // minify CSS
        .pipe(gulp.dest('website')); // put final CSS in dist folder
});

// JS task: concatenates and uglifies JS files to script.js
gulp.task('js', function(){
    return gulp.src(['./js/*.js'])
        .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('website'));
});

// Watch task: watch SCSS and JS files for changes
gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', gulp.series('sass'));
    gulp.watch('./js/*.js', gulp.series('js'));    
});

// Default task
gulp.task('default', gulp.series('sass', 'js', 'watch'));