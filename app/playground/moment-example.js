var moment=require('moment');


var now=moment();

var unixNow=now.unix();

var currentMomen=moment.unix(unixNow);

console.log(currentMomen.format('MMMM Do, YYYY @ h:m A'));
