var data = require('./strings');
var people = data.mvp.people;
var companies = data.mvp.companies;
var splitByComma = people.replace(/\n/g, ",");
var totalSplit = splitByComma.split(',');




var firstName = function(){
  var firstNames=[];
  var i=0
  while(i<totalSplit.length) {

    firstNames.push(totalSplit[i]);
  i+=3;
  }
  return firstNames;
}

var lastName = function(){
  var lastNames=[];
  var i=1
  while(i<totalSplit.length) {

    lastNames.push(totalSplit[i]);
  i+=3;
  }
  return lastNames;
}

var address = function(){
  var addresses=[];
  var i=2
  while(i<totalSplit.length) {

    addresses.push(totalSplit[i]);
  i+=3;
  }
  return addresses;
}

var row = function () {
  var i = 0;
  var eachRow = "";
    while (i < firstName().length) {
    eachRow += firstName()[i]+"   " +" "+ lastName()[i] +"     "+ address()[i] + ("\n");
    i++
  }
  return eachRow;
}

function longest(){
  var x =0;
  for(var i=0; i < firstName().length; i++){
    if (firstName()[i].length > x)
      x = firstName()[i].length;
  };
  return x;
};

function(9, firstName(), " "){
  for (var i=0; i<firstName().length; i++){
    if (firstName()[i].length < 9)
      total = 9 - firstName()[i].length

  }
}
console.log(row());
