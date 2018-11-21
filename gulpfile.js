var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');


////////////////////////////////////////////////
// DEVELOPMENT TASK - RUNNING DURING DEVELOPMENT

// Creating server for live reload
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

// Compile all SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Live reloads browser when HTML, CSS or JS is updated
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

// Combines above tasks, and run by typing just "gulp" in BASH
gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
})


//////////////////////////////////////////////
// BUILD TASK - CREATING CODE FOR DISTRIBUTION

// Delete all content in "dist" folder
gulp.task('clean:dist', function () {
    return del.sync('dist');
})

// Minify and combine CSS and JS to one file in correct order 
gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist')) // Copy output CSS and JS folder to dist
});

// Minify images
gulp.task('images', function () {
    return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img')) // Copy output to dist/img
});

// Runs the taks above in correct order. 
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images'],
        callback
    )
})


