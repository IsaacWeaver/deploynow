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
var babel = require('gulp-babel');


// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass()) // compile SCSS to CSS
        .pipe(cssnano()) // minify CSS
        .pipe(gulp.dest('site')); // put final CSS in dist folder
});

// JS task: concatenates and uglifies JS files to script.js
gulp.task('js', function(){
    return gulp.src(['./src/js/*.js'])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('site'));
});

// Watch task: watch SCSS and JS files for changes
gulp.task('watch', function(){
    gulp.watch('./src/sass/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/*.js', gulp.series('js'));    
});

// Default task
gulp.task('default', gulp.series('sass', 'js', 'watch'));