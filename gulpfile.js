let gulp = require('gulp');
let sass = require('gulp-sass');
let webserver = require('gulp-webserver');

// gulp.task('hbs', function(){
//     return gulp.src('views/**/*.hbs')
//     .pipe(gulp.dest(buildPath + '/views'));
// });

// gulp.task('watch:hbs', gulp.series('hbs', function(done){
//     gulp.watch('views/**/*.hbs', gulp.series('hbs'));
//     done();
// }));

gulp.task('styles', function(){
    return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles'));
});

gulp.task('watch:styles', gulp.series('styles', function(done){
    gulp.watch('src/scss/*.scss', gulp.series('styles'));
    done();
}));

// gulp.task('js', function(){
//     return gulp.src('**/**/*.js')
//     .pipe(gulp.dest(buildPath));
// });

// gulp.task('watch:js', gulp.series('js', function(done){
//     gulp.watch('**/**/*.js', gulp.series('js'));
//     done();
// }));

// gulp.task('serve', function(){
//     return gulp.src(buildPath + '/views/index.hbs')
//     .pipe(webserver({
//         open: true,
//         livereload: true
//     }))
// });

gulp.task('default', gulp.series('watch:styles'));