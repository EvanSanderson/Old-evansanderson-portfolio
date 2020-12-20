require('events').EventEmitter.prototype._maxListeners = 100;

'use strict';
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    es = require('event-stream'),
    cleanCSS = require('gulp-clean-css'),
    usemin = require('gulp-usemin'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass');

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/sass/*.scss', ['sass'], browserSync.reload);
    gulp.watch('./src/js/**/*.js', ['scripts']).on('change', browserSync.reload);

});

    gulp.task('minify', function(){
        return gulp.src('css/*.css')
            .pipe(minifyCSS())
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.stream());
    })

    gulp.task('scripts', ['minify'], function(){
        return gulp.src('./src/js/*.js')
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
    })

// Main build function
gulp.task('build', function () {
    return gulp.start(
        'minify',
        'scripts'
    );
});
