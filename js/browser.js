var Journal = require("./../js/scripts.js").Journal;
var wordCount = Journal.wordCount;

// front end: appending to webpage
$(document).ready(function(){
  $("form.journalEntry").submit(function(event) {
    event.preventDefault();
    var title = $("input#title").val();
    var entry = $("textarea#entry").val();

    var myJournal = new Journal(title, entry);
    $(".entries").append("<p>" + "<b>" + myJournal.title + "</b>"+ "<br>" + myJournal.entry + "</p>");
    $(".entries").append("<i>word count: </i>" + myJournal.wordCount());
  });
});
