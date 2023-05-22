let gulp     = require('gulp'),
    browserSync  = require('browser-sync').create(),
    uglify       = require('gulp-uglify'),
    fileinclude = require('gulp-file-include'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    less         = require('gulp-less');

gulp.task('html_build', function (done) {
    return gulp.src('src/*.html')
        .pipe(fileinclude())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('css_build', function (done) {
    return gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('image', function (done) {
    gulp.src('src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('js_build', function (done) {
    return gulp.src('src/js/main.js')
        .pipe(fileinclude())
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('webServer', function(done) {
    browserSync.init({
        server: "build/"
    });
    gulp.watch('src/**/*.html', gulp.series('html_build'));
    gulp.watch('src/**/*.less', gulp.series('css_build'));
    gulp.watch('src/**/*.js', gulp.series('js_build'));
    done();
});

gulp.task('default', gulp.series('html_build', 'image', 'css_build', 'js_build', 'webServer'));