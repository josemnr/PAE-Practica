const { series } = require('gulp');
let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript');
let webserver = require('gulp-webserver');

const buildPath = 'dist';

gulp.task('html', function(){
    return gulp.src('views/index.html')
    .pipe(gulp.dest(buildPath + '/views'));
});

gulp.task('watch:html', gulp.series('html', function(done){
    gulp.watch('views/**/*.html', gulp.series('html'));
    done();
}));

gulp.task('styles', function(){
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(buildPath + '/public/styles'));
});

gulp.task('watch:styles', gulp.series('styles', function(done){
    gulp.watch('src/**/*.scss', gulp.series('styles'));
    done();
}));

gulp.task('scripts', function(){
    let tsConfig = typescript.createProject('tsconfig.json')
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest(buildPath + '/public/scripts'));
});

gulp.task('watch:scripts', gulp.series('scripts', function(done){
    gulp.watch('public/scripts/**/*.ts', gulp.series('scripts'));
    done();
}));

gulp.task('js', function(){
    return gulp.src('src/app.js')
    .pipe(gulp.dest(buildPath + '/src'));
});

gulp.task('watch:js', gulp.series('js', function(done){
    gulp.watch('src/**/*.js', gulp.series('js'));
    done();
}));

gulp.task('serve', function(){
    return gulp.src(buildPath + '/src/app.js')
    .pipe(webserver({
        open: true,
        livereload: true
    }))
});

gulp.task('default', gulp.series('watch:styles', 'watch:scripts', 'watch:html', 'watch:js', 'serve'));