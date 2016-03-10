'use strict';
var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

var vendorPath = 'js/vendor/';

var paths = [
  vendorPath + 'datatables.net/js/jquery.dataTables.js',
  vendorPath + 'datatables.net-responsive/js/dataTables.responsive.js',
  vendorPath + 'datatables.net-select/js/dataTables.select.js',
  vendorPath + 'datatables.net-buttons/js/dataTables.buttons.js',
  vendorPath + 'datatables.net-colreorder/js/dataTables.colReorder.js',
  vendorPath + 'datatables.net-buttons/js/dataTables.colVis.js',
  vendorPath + 'jquery-datatables-column-filter/jquery.dataTables.columnFilter.js',
  vendorPath + 'datatables.net-fixedcolumns/js/dataTables.fixedColumns.js',
  vendorPath + 'datatables.net-fixedheader/js/dataTables.fixedHeader.js'
];

gulp.task('bower', function(cb) {
 return gulp.src('')
  .pipe($.run('bower install -q --allow-root'))
})

gulp.task('datatable', ['bower'], function() {
  return gulp.src(paths)
    .pipe($.concat('brecTables.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('install', ['datatable']);
