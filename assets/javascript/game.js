
var userCount = 0;
var wins = 0;
var losses = 0;
$("#win").text(wins);
$("#loss").text(losses);



var target = function(){
  var a = Math.floor((Math.random() * 120) + 19);
  return a;
}

var crystal0 = function(){
  var b = Math.floor((Math.random() * 12) + 1);
  return b;
}

var crystal1 = function(){
  var c = Math.floor((Math.random() * 12) + 1);
  return c;
}

var crystal2 = function(){
  var d = Math.floor((Math.random() * 12) + 1);
  return d;
}

var crystal3 = function(){
  var e = Math.floor((Math.random() * 12) + 1);
  return e;
}

$('.value').text(target());

$('#crystal0').html("<button>" + crystal0() + "</button>");

$('#crystal1').html("<button>" + crystal1() + "</button>");

$('#crystal2').html("<button>" + crystal2() + "</button>");

$('#crystal3').html("<button>" + crystal3() + "</button>");





$("#crystal0").click(function() {
  alert("Value: " + $("#crystal0").text());
  userCount = userCount + $("crystal0").text();
  console.log(userCount + $("crystal0"));
})
