$(document).ready(function () {
  for (var i = 0; i < 118; i++) {
    (function (index) {
      $("#ptElemId" + index).hover(function () {
        $("#none" + index).toggle();
        // $("#none" + index).toggle("fold",500 );
      });
    })(i);
  }
});

var elemId = [];
for (var i = 1; i <= 118; i++) {
  b.push(i);
}


for (var i = 0; i < 118; i++) {
}

