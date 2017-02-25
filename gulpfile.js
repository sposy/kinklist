"use strict";

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    tsc = require("gulp-typescript"),
    tsProject = tsc.createProject("tsconfig.json"),
    tslint = require('gulp-tslint');

/**
 * Runs the default task.
 */
gulp.task('default', ['rebuild']);

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile-ts']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html"], ['build-html']).on('change', function (e) {
        console.log('Html file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(["src/app/**/*.scss"], ['build-styles']).on('change', function (e) {
        console.log('CSS file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

/**
 * Build the project.
 */
gulp.task("build", ['compile-ts', 'build-resources'], () => {
    console.log("Building the project ...");
});

/**
 * Rebuild the project.
 */
gulp.task("rebuild", ['clean'], () => {
    console.log("Rebuilding the project ...");
    gulp.start('build');
});

/**
 * Build the project resources.
 */
gulp.task("build-resources", ['build-html', 'build-images', 'build-fonts', 'build-scripts', 'build-styles', 'build-libs'], () => {
    console.log("Building the project ...");
});

/**
 * Build styles.
 */
gulp.task('build-styles', function() {
  return gulp.src('src/app/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/styles'));
});

/**
 * Build scripts.
 */
gulp.task('build-scripts', function() {
  return gulp.src('src/**/*.js')
    // .pipe(sourcemaps.init())
    // .pipe(concat('bundle.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

/**
 * Build fonts.
 */
gulp.task('build-fonts', function() {
  return gulp.src('src/app/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('build'));
});

/**
 * Build images.
 */
gulp.task('build-images', function() {
  return gulp.src('src/app/images/**/*')
    .pipe(gulp.dest('build/images'));
});

/**
 * Build html.
 */
gulp.task('build-html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'));
});


/**
 * Copy all required libraries into build directory.
 */
gulp.task("build-libs", () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'purecss/build/**',
            'font-awesome/{css,fonts}/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile-ts", () => {
    let tsResult = gulp.src("src/**/*.ts")
        // .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        // .pipe(sourcemaps.write(".", {sourceRoot: '/src'}))
        .pipe(gulp.dest("build"));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});
