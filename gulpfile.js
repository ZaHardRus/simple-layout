let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create()


const style = () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

const watch = () => {
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
    gulp.watch('./sass/**/*.scss',style)
    gulp.watch('./*.html').on('change',browserSync.reload)
    gulp.watch('./*.js').on('change',browserSync.reload)
    gulp.watch('./*.ts').on('change',browserSync.reload)
}

exports.style = style
exports.watch = watch;