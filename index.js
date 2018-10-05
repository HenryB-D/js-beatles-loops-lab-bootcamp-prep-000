function theBeatlesPlay(musicians, instruments) {
  var newArray = []; 
  for(var i =0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(arr) {
  var result = [];
  var i = 0
  while (i<arr.length) {
    result .push(arr[i] + "!!!")
    i++;
  }
  return result;
  