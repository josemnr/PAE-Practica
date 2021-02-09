const { series } = require('gulp');
let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript')

gulp.task('html', function(){
    console.log('Tarea para el html')
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function(){
    console.log('Tarea para transformar SASS')
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('scripts', function(){
    console.log('Tarea para transformar Typescript')
    let tsConfig = typescript.createProject('tsconfig.json')
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('default', gulp.series(['styles', 'scripts', 'html']));