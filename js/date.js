var moment = require('moment');

exports.Journal = function(title, entry, date) {
  this.title = title;
  this.entry = entry;
  // get date
  this.date = function(){
    return moment().format("MMM Do YYYY");
};
