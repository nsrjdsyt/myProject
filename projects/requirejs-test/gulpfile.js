var gulp = require('gulp');
var browserSync = require('browser-sync').create();




//html
gulp.task('html', function() {
    var htmlSrc = './src/*.html';
    var htmlDst = 'build';

    gulp.src(htmlSrc).pipe(gulp.dest(htmlDst));
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
    'js', 'html'
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

