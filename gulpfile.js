const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

const path = {
    root: "./dist/",
    cssSrc: "./src/scss/**/*.scss",
    cssDist: "./dist/css",
    imageSrc: "./src/images/**/*",
    imageDist: "./dist/images",
    htmlSrc: "./src/html/index.html"
};

const css = function(){
    return gulp.src(path.cssSrc)
        .pipe(sass(
            {outputStyle: "compressed"}
        ).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.cssDist))
};

const photoCompression = function(){
    return gulp.src(path.imageSrc)
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
        .pipe(gulp.dest(path.imageDist))
};

const html = function(){
    return gulp.src(path.htmlSrc)
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.root))
};

const server = function(cb){
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
    cb();
}

const serverReload = function(cb){
    browserSync.reload();
    cb();
}

const watch = function(){
    gulp.watch(path.cssSrc, gulp.series(css, serverReload));
    gulp.watch(path.htmlSrc, gulp.series(html, serverReload));
};



exports.default = gulp.series(html, css, server, watch);
exports.production = gulp.series(photoCompression, html, css);

