

var moment = require('./scripts.js').moment;
moment().format();



var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayMoment');
eDisplayMoment.innerHTML = NowMoment().format("MMM Do YYYY");
