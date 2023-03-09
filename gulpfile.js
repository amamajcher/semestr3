const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const css = function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass(
            {outputStyle: "compressed"}
        ).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./dist/css"))
};

exports.default = gulp.series(css);