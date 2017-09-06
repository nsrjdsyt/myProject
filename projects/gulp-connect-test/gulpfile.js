var gulp        = require('gulp');
var connect     = require('gulp-connect');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var proxy       = require('http-proxy-middleware');
var imageMin    = require('gulp-imagemin');
var cache       = require('gulp-cache');

//image
gulp.task('image', function(){
  var imgSrc = './src/image/**/*';
  var imgDst = 'build/image';

 return gulp.src(imgSrc)
    .pipe(cache(imageMin()))
    .pipe(gulp.dest(imgDst));
});

//mock
gulp.task('mock', function(){
    var mockSrc = './src/mock/*.*';
    var mockDst = 'build/mock';

    return gulp.src(mockSrc)
        .pipe(gulp.dest(mockDst));
});

//html
gulp.task('html', function(){
  var htmlSrc = './src/*.html';
  var htmlDst = 'build';

  return gulp.src(htmlSrc)
    .pipe(gulp.dest(htmlDst))
    .pipe(connect.reload());
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(connect.reload());
});

//js
gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(connect.reload());
});

//watch-js
gulp.task('js-watch', ['js'], function () {
    connect.reload();
});

gulp.task('watch', function() {
  gulp.watch("./src/mock/*", ['mock','js-watch']);
  gulp.watch("./src/image/*", ['image', 'sass']);
  gulp.watch("./src/scss/*.scss", ['sass']);
  gulp.watch("./src/js/*.js", ['js-watch']);
  gulp.watch("./src/*.html", ['html']);
})

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy('/m',{
  target: 'http://devpre.cnsuning.com:8080',
  changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  pathRewrite:{
   '^/m/ajax/' :'/build/mock/'
  }
});

//使用connect启动一个Web服务器
gulp.task('serve', ['mock','sass','image','js','html'], function () {
	connect.server({
		root: __dirname,
		livereload: true,
        middleware: function(){
            return [jsonPlaceholderProxy]
        }
	});
});

gulp.task('default', ['serve','watch']);
