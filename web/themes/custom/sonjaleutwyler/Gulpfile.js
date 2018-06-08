var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers:['last 15 versions', '>1%','ie 10', 'ie 9','safari 5'],
      cascade: true}))
    .pipe(gulp.dest('./css/'))
});

gulp.task('styles_with_browsersync', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers:['last 15 versions', '>1%','ie 10', 'ie 9','safari 5'],
      cascade: true}))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task("browser-sync", function() {
  browserSync({
    // server: {
    //   baseDir:'app'
    // },
    proxy: {
      target:"sonjaleutwyler.local:80"
    },
    notify: false
  });
});

//Watch task
gulp.task('watch',['styles'],function() {
  gulp.watch('scss/**/*.scss',['styles']);
});

gulp.task('watch:bs',['browser-sync','styles_with_browsersync'],function() {
  gulp.watch('scss/**/*.scss',['styles_with_browsersync']);
});
