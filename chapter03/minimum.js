Exer.min = function (love, cat, frog) {
  if (frog == undefined) {
    if (love > cat) {
      return cat;
    }
    else {
      return love;
    }
  }
else {
  if (love < cat && love < frog){
    return love;
  }
  else if (cat < love && cat < frog) {
    return cat;
  }
  else {
    return frog;
  }
}
};

Exer.min3 = function (first, second, third) {
  if (first < second && first < third){
    return first;
  }
  else if (second < first && second < third) {
    return second;
  }
  else {
    return third;
  }
};
