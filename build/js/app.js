(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/scripts.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
