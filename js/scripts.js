
var Journal = function(title, entry) {
  this.title = title;
  this.entry = entry;
}

$(document).ready(function(){
  $("form.journalEntry").submit(function(event) {
    event.preventDefault();
    var title = $("input#title").val();
    var entry = $("textarea#entry").val();

    var journal = new Journal(title, entry);

    $(".entries").append("<p>" + "<b>" + title + "</b>"+ "<br>" + entry + "</p>");
  });
});
