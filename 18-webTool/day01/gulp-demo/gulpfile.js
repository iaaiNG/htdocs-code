const gulp = require('gulp');
const jshint = require('gulp-jshint')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sass = require('gulp-sass')

gulp.task('default', () => {
    // console.log('Hello, gulp!')
    // gulp.run('scripts')
    gulp.watch('./js/*.js',()=>{
        gulp.run('scripts')
    })
})

gulp.task('hint', () => {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('scripts', () => {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task('sass', () => {
    gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
})
