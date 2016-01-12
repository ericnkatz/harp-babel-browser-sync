var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var harp        = require('harp');
var cp        = require('child_process');

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server(__dirname + '/src', {
    port: 9000
  }, function () {
    browserSync({
      proxy: "localhost:9000",
      open: false,
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    gulp.watch("src/**/*.scss", function () {
      reload("style.css", {stream: true});
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(["src/**/*.jade", "src/**/*.json"], function () {
      reload();
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    gulp.watch("src/build/**/*.js", function () {
      reload("script.js", {stream: true});
    });
  })
});

/**
 * Build the Production (Static) Site
 */
gulp.task('build', function (done) {
  cp.exec('harp compile src dist', {stdio: 'inherit'})
    .on('close', done)
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the harp site, launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);