// back end
var Journal = function(title, entry) {
  this.title = title;
  this.entry = entry;
};


Journal.prototype.wordCount = function() {
  return this.entry.split(" ").length;
};


// front end
$(document).ready(function(){
  $("form.journalEntry").submit(function(event) {
    event.preventDefault();
    var title = $("input#title").val();
    var entry = $("textarea#entry").val();

    var myJournal = new Journal(title, entry);
    debugger;
    $(".entries").append("<p>" + "<b>" + myJournal.title + "</b>"+ "<br>" + myJournal.entry + "</p>");
    $(".entries").append("word count" + myJournal.wordCount());
  });
});
