const {series} = require('gulp')
const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const {parallel} = require('gulp')
const sass = require('gulp-sass')
function TransformaçaoCSS(callback){
    gulp.src('src/sass/index.scss')
        .pipe(sass())
        .pipe(uglifycss({"uglyComments":true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
    return callback    
}
function exportandoHTML (callback){
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
    return callback
}
exports.default = series(
    exportandoHTML
    
)