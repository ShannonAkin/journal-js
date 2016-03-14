// // back end
// var moment = require('moment');
//

function Journal(title, entry, date) {
  this.title = title;
  this.entry = entry;
  // get date
  this.date = function(){
    return moment().format("MMM Do YYYY");
  };
};

// retuen word count
Journal.prototype.wordCount = function() {
  return this.entry.split(" ").length;
};

module.exports.Journal = Journal;
