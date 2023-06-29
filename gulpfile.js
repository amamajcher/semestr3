const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

const css = function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass(
            {outputStyle: "compressed"}
        ).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./dist/css"))
};

const photoCompression = function(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
	        imagemin.mozjpeg({quality: 75, progressive: true}),
	        imagemin.optipng({optimizationLevel: 5}),
	        imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
	        })
        ]))
        .pipe(gulp.dest("./dist/images"))
};



exports.default = gulp.series(css);
exports.build = gulp.series(photoCompression);
