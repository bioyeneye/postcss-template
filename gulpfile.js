//https://github.com/postcss/postcss/blob/master/docs/plugins.md

var gulp = require("gulp");
var postcss = require("gulp-postcss"); //https://github.com/postcss/postcss/blob/master/docs/plugins.md
var autoprefixer = require("autoprefixer");
var postcssutilities = require("postcss-utilities"); //https://ismamz.github.io/postcss-utilities
var postcssapply = require("postcss-apply"); //https://github.com/pascalduez/postcss-apply

gulp.task("css", function () {
     var plugin = [
          autoprefixer(),
          postcssutilities({
               centerMethod: "flexbox",
               ie8: true
          }),
          postcssapply()
     ];
     return gulp
          .src(["./css/*.css"])
          .pipe(postcss(plugin))
          .pipe(gulp.dest("./dest"));
});

gulp.task(
     "serve",
     gulp.series("css", function () {
          gulp.watch(["./css/*.css"], gulp.series("css"));
     })
);

gulp.task("default", gulp.series("serve"));
