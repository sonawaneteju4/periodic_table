var transitionMetals = [
  { start: 20, end: 29 },
  { start: 38, end: 47 },
  { start: 71, end: 79 },
  { start: 103, end: 107 },
];
var alkali = [2, 10, 18, 36, 54, 86];
var alkalineEarth = [3, 11, 19, 37, 55, 87];
var pastTrans = [12, 30, 48, 49, 80, 81, 82, 83, 84];
var metalioids = [4, 13, 31, 32, 50, 51];
var nobelGas = [1, 9, 17, 35, 53, 85];
var reactiveNonMetal = [0, 5, 6, 7, 8, 14, 15, 16, 33, 34, 52];
var lanthanides = [{ start: 56, end: 70 }];
var actinides = [{ start: 88, end: 102 }];
var unknown = [{ start: 108, end: 117 }];
// var arr = [transitionMetals,alkali,alkalineEarth,pastTrans,metalioids,nobelGas,reactiveNonMetal,lanthanides,actinides,unknown]

var nobelGas = [1, 9, 17, 35, 53, 85];
$(document).ready(function () {
  for (var i = 0; i < 118; i++) {
    (function (index) {
      $("#ptElemId" + index).hover(function () {
        $("#none" + index).toggle();
        // $("#none" + index).toggle("fold",500 );
      });
    })(i);
  }

  //transitionMetals
  transitionMetals.forEach(function (range) {
    for (var i = range.start; i <= range.end; i++) {
      (function (index) {
        $("#transitionMetals").hover(function () {
          $("#ptElemId" + index).toggleClass("transitionMetalsCSS");
          // $("#none" + index).toggle("fold",500 );
        });
      })(i);
    }
  });
  
  // alkali
  alkali.forEach(function (index) {
    $("#alkali").hover(function () {
      $("#ptElemId" + index).toggleClass("alkaliCSS");
      // $("#none" + index).toggle("fold", 500);
    });
  });
  // alkalineEarth
  alkalineEarth.forEach(function (index) {
    $("#alkalineEarth").hover(function () {
      $("#ptElemId" + index).toggleClass("alkalineEarthCSS");
      // $("#none" + index).toggle("fold", 500);
    });
  });
  // pastTrans
  pastTrans.forEach(function (index) {
    $("#pastTrans").hover(function () {
      $("#ptElemId" + index).toggleClass("pastTransCSS");
      // $("#none" + index).toggle("fold", 500);
    });
  });
  // metalioids
  metalioids.forEach(function (index) {
    $("#metalioids").hover(function () {
      $("#ptElemId" + index).toggleClass("metalioidsCSS");
      // $("#none" + index).toggle("fold", 500);
    });
  });
  // nobelGas,
  nobelGas.forEach(function (index) {
    $("#nobelGas").hover(function () {
      $("#ptElemId" + index).toggleClass("nobelGasCSS");
      // $("#none" + index).toggle("fold", 500);
    });
  });
  
  // reactiveNonMetal
  reactiveNonMetal.forEach(function (index) {
    $("#reactiveNonMetal").hover(function () {
      $("#ptElemId" + index).toggleClass("reactiveNonMetalCSS");
      // $("#none" + index).toggle("fold", 500);
    });
  });

  // lanthanides
  lanthanides.forEach(function (range) {
    for (var i = range.start; i <= range.end; i++) {
      (function (index) {
        $("#lanthanides").hover(function () {
          $("#ptElemId" + index).toggleClass("lanthanidesCSS");
          // $("#none" + index).toggle("fold",500 );
        });
      })(i);
    }
  });
  // actinides
  actinides.forEach(function (range) {
    for (var i = range.start; i <= range.end; i++) {
      (function (index) {
        $("#actinides").hover(function () {
          $("#ptElemId" + index).toggleClass("actinidesCSS");
          // $("#none" + index).toggle("fold",500 );
        });
      })(i);
    }
  });
  // unknown
  unknown.forEach(function (range) {
    for (var i = range.start; i <= range.end; i++) {
      (function (index) {
        $("#unknown").hover(function () {
          $("#ptElemId" + index).toggleClass("unknownCSS");
          // $("#none" + index).toggle("fold",500 );
        });
      })(i);
    }
  });

});

var elemId = [];
for (var i = 1; i <= 118; i++) {
  b.push(i);
}

for (var i = 0; i < 118; i++) {}
