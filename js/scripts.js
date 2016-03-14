// // back end
var Journal = function(title, entry) {
  this.title = title;
  this.entry = entry;
  // get date
  this.date = moment().format("MMM Do YYYY");
};

// retuen word count
Journal.prototype.wordCount = function() {
  return this.entry.split(" ").length;
};

exports.Journal = Journal;
