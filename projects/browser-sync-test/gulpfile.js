var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
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

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss").pipe(sass()).pipe(postcss([autoprefixer({browsers: ['last 1 version']}),cssnano()])).pipe(gulp.dest("build/css")).pipe(browserSync.stream());
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
    gulp.watch("./src/image/*", ['image', 'sass']);
    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/js/*.js", ['js-watch']);
    gulp.watch("./src/*.html", ['html']).on('change', browserSync.reload);
});

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy('/m', {
    target: 'http://devpre.cnsuning.com:3000',
    changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    pathRewrite: {
        '^/m/ajax/': '/build/mock/'
    }
});

// Static Server + watching scss/js/html files
gulp.task('serve', [
    'mock', 'sass', 'image', 'js', 'html'
], function() {
    browserSync.init({
        server: {
            baseDir: './',
            port: 3000,
            middleware: [jsonPlaceholderProxy]
        }
        // startPath: '/build/test.html'
    })

    gulp.start("watch");
});

gulp.task('default', ['serve']);



//html 、js 和 css 更改后同步刷新浏览器
// gulp.task('browser-sync', function() {
//     var files = [
//           '*.html',
//           '**/*.css',
//           '**/*.js',
//           '**/*.scss'
//        ];
//
//        browserSync.init(files, {
//           server: {
//              baseDir: './'
//           }
//        });
// });
//
// gulp.task('reload', function(){
//     browserSync.reload()
// })
//
// gulp.task('default', ['browser-sync'], function(){
//     gulp.watch(['*.html', './src/css/*.css', '**/*.js'], ['reload']);
// });
