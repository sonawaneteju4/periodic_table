          var alkali = [2, 10, 18, 36, 54, 86];
          alkali.forEach(function (id) {
            var element = document.getElementById("mainElemId" + id);
            if (element) {
              element.classList.add("alkali");
            }
          });
          // Alkali Metals
          var alkalineEarth = [3, 11, 19, 37, 55, 87];
          alkalineEarth.forEach(function (id) {
            var element = document.getElementById("mainElemId" + id);
            if (element) {
              element.classList.add("alkalineEarth");
            }
          });
          // Alkali Metals
          var transitionMetals = [
            { start: 20, end: 29 },
            { start: 38, end: 47 },
            { start: 71, end: 79 },
            { start: 103, end: 107 },
          ];

          transitionMetals.forEach(function (range) {
            for (var i = range.start; i <= range.end; i++) {
              var element = document.getElementById("mainElemId" + i);
              if (element) {
                element.classList.add("transitionMetals");
              }
            }
          });
          var pastTrans = [12, 30, 48, 49, 80, 81, 82, 83, 84];

          pastTrans.forEach(function (id) {
            var element = document.getElementById("mainElemId" + id);
            if (element) {
              element.classList.add("pastTrans");
            }
          });
          var metalioids = [4,13,31,32,50,51];

          metalioids.forEach(function (id) {
            var element = document.getElementById("mainElemId" + id);
            if (element) {
              element.classList.add("metalioids");
            }
          });
          var reactiveNonMetal = [0,5,6,7,8,14,15,16,33,34,52];

          reactiveNonMetal.forEach(function (id) {
            var element = document.getElementById("mainElemId" + id);
            if (element) {
              element.classList.add("reactiveNonMetal");
            }
          });
          var nobelGas = [1,9,17,35,53,85];

          nobelGas.forEach(function (id) {
            var element = document.getElementById("mainElemId" + id);
            if (element) {
              element.classList.add("nobelGas");
            }
          });
          var lanthanides = [  { start: 56, end: 70 }];
          lanthanides.forEach(function (range) {
            for (var i = range.start; i <= range.end; i++) {
              var element = document.getElementById("mainElemId" + i);
              if (element) {
                element.classList.add("lanthanides");
              }
            }
          });
          var actinides = [{ start: 88, end: 102 }];

          actinides.forEach(function (range) {
            for (var i = range.start; i <= range.end; i++) {
              var element = document.getElementById("mainElemId" + i);
              if (element) {
                element.classList.add("actinides");
              }
            }
          });
          var unknown = [{ start: 108, end: 117 }];

          unknown.forEach(function (range) {
            for (var i = range.start; i <= range.end; i++) {
              var element = document.getElementById("mainElemId" + i);
              if (element) {
                element.classList.add("unknown");
              }
            }
          });