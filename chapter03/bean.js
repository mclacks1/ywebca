//Bean.js
Exer.countChar = function (checksString/*Change the name*/, letter/*Change the name*/){
  var count/*Change the name*/ = 0;
  for (i = 0; i < checksString.length; i++){
    if (checksString.charAt(i) == letter){
      count++;
    }
  }
  return count;
};

Exer.countBs = function (bWord/*Change the name*/) {
  return Exer.countChar(bWord/*Change the name*/, "B");
};

Exer.countCharX = function (character/*Change the name*/){
  return function (string/*Change the name*/){
    return Exer.countChar(string, character);
  }
};