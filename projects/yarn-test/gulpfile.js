var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var proxy = require('http-proxy-middleware');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano');

//image
gulp.task('image', function() {
    var imageMin = require('gulp-imagemin');
    var cache = require('gulp-cache');
    var imgSrc = './src/image/**/*';
    var imgDst = 'build/image';

    gulp.src(imgSrc).pipe(cache(imageMin())).pipe(gulp.dest(imgDst));
});

//mock
gulp.task('mock', function() {
    var mockSrc = './src/mock/*.*';
    var mockDst = 'build/mock';

    gulp.src(mockSrc).pipe(gulp.dest(mockDst));
});

//html
gulp.task('html', function() {
    var htmlSrc = './src/*.html';
    var htmlDst = 'build';

    gulp.src(htmlSrc).pipe(gulp.dest(htmlDst));
});

// Compile less into CSS & auto-inject into browsers
gulp.task('css', function() {
    return gulp.src("./src/css/*.less").pipe(less()).pipe(postcss([autoprefixer({browsers: ['last 1 version']}),cssnano()])).pipe(gulp.dest("build/css")).pipe(browserSync.stream());
});

//js
gulp.task('js', function() {
    return gulp.src('./src/js/*.js').pipe(uglify()).pipe(gulp.dest('build/js'));
});

//watch-js
gulp.task('js-watch', ['js'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
    gulp.watch("./src/mock/*", ['mock', 'js-watch']);
    gulp.watch("./src/image/*", ['image', 'css']);
    gulp.watch("./src/css/*.less", ['css']);
    gulp.watch("./src/js/*.js", ['js-watch']);
    gulp.watch("./src/*.html", ['html']).on('change', browserSync.reload);
});

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy('/m', {
    target: 'http://devpre.cnsuning.com:3000', //需要在本地绑定ip,如：10.24.24.65 devpre.cnsuning.com
    changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    pathRewrite: {
        '^/m/ajax/': '/build/mock/'
    }
});

// Static Server + watching scss/js/html files
gulp.task('serve', [
    'mock', 'css', 'image', 'js', 'html'
], function() {
    browserSync.init({
        server: {
            baseDir: './',
            port: 3000,
            middleware: [jsonPlaceholderProxy]
        },
        startPath: '/build/test.html'
    })

    gulp.start("watch");
});

gulp.task('default', ['serve']);
