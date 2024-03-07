//? gulp imports
const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();

//? gulp tasks
// js compile
gulp.task("js", () => {
  return gulp
    .src("../js/modules/*.js")
    .pipe(
      rollup({
        input: "../js/modules/main.js",
        output: {
          file: "../js/dist",
          format: "umd",
          name: "app",
        },
      })
    )
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(rename("bundle.min.js"))
    .pipe(gulp.dest("../js/dist"))
    .pipe(browserSync.stream());
});

// sass compile
gulp.task("sass", () => {
  return gulp
    .src("../css/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("../css/dist"))
    .pipe(browserSync.stream());
});

// watch files
gulp.task("watch", () => {
  // watch js
  watch("../js/modules/*.js", { ignoreInitial: false }).on(
    "change",
    gulp.series("js")
  );
  // watch sass
  watch("../css/scss/*.scss", { ignoreInitial: false }).on(
    "change",
    gulp.series("sass")
  );
  // watch html
  watch("../*.html", { ignoreInitial: false }).on("change", browserSync.reload);
});

// browser sync
gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "../",
    },
  });
});

// default task
gulp.task("default", gulp.parallel("watch", "browser-sync"));
