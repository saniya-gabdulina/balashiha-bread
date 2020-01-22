const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done){
    console.log('Привет, мир!');
    done();
})

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());

};