
periodic_table = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminum",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium",
  "Scandium",
  "Titanium",
  "Vanadium",
  "Chromium",
  "Manganese",
  "Iron",
  "Cobalt",
  "Nickel",
  "Copper",
  "Zinc",
  "Gallium",
  "Germanium",
  "Arsenic",
  "Selenium",
  "Bromine",
  "Krypton",
  "Rubidium",
  "Strontium",
  "Yttrium",
  "Zirconium",
  "Niobium",
  "Molybdenum",
  "Technetium",
  "Ruthenium",
  "Rhodium",
  "Palladium",
  "Silver",
  "Cadmium",
  "Indium",
  "Tin",
  "Antimony",
  "Tellurium",
  "Iodine",
  "Xenon",
  "Cesium",
  "Barium",
  "Lanthanum",
  "Cerium",
  "Praseodymium",
  "Neodymium",
  "Promethium",
  "Samarium",
  "Europium",
  "Gadolinium",
  "Terbium",
  "Dysprosium",
  "Holmium",
  "Erbium",
  "Thulium",
  "Ytterbium",
  "Lutetium",
  "Hafnium",
  "Tantalum",
  "Tungsten",
  "Rhenium",
  "Osmium",
  "Iridium",
  "Platinum",
  "Gold",
  "Mercury",
  "Thallium",
  "Lead",
  "Bismuth",
  "Polonium",
  "Astatine",
  "Radon",
  "Francium",
  "Radium",
  "Actinium",
  "Thorium",
  "Protactinium",
  "Uranium",
  "Neptunium",
  "Plutonium",
  "Americium",
  "Curium",
  "Berkelium",
  "Californium",
  "Einsteinium",
  "Fermium",
  "Mendelevium",
  "Nobelium",
  "Lawrencium",
  "Rutherfordium",
  "Dubnium",
  "Seaborgium",
  "Bohrium",
  "Hassium",
  "Meitnerium",
  "Darmstadtium",
  "Roentgenium",
  "Copernicium",
  "Nihonium",
  "Flerovium",
  "Moscovium",
  "Livermorium",
  "Tennessine",
  "Oganesson",
];

ptsm = [
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Po",
  "At",
  "Rn",
  "Fr",
  "Ra",
  "Ac",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "Db",
  "Sg",
  "Bh",
  "Hs",
  "Mt",
  "Ds",
  "Rg",
  "Cn",
  "Nh",
  "Fl",
  "Mc",
  "Lv",
  "Ts",
  "Og",
];

var ptCount = 0;

for (var i = 0; i < 2; i++) {
  document.write(
    '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
      periodic_table[i] +
      '" id="ptElemId' +
      i +
      '" class="ptElemCl' +
      i +
      '">' +
      "   " +
      ptsm[i] +
      "   " +
      "</a>"
  );
  ptCount++;
}
document.write("</br>");
for (var j = 0; j < 2; j++) {
  for (var k = 0; k < 8; k++) {
    document.write(
      '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
        periodic_table[ptCount] +
        '" id="ptElemId' +
        ptCount +
        '" class="ptElemCl' +
        ptCount +
        '">' +
        "   " +
        ptsm[ptCount] +
        "   " +
        "</a>"
    );
    ptCount++;
  }
  document.write("</br>");
}
for (var j = 0; j < 2; j++) {
  for (var k = 0; k < 18; k++) {
    document.write(
      '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
        periodic_table[ptCount] +
        '" id="ptElemId' +
        ptCount +
        '" class="ptElemCl' +
        ptCount +
        '">' +
        "   " +
        ptsm[ptCount] +
        "   " +
        "</a>"
    );
    ptCount++;
  }
  document.write("</br>");
}
for (var k = 54; k < 57; k++) {
  document.write(
    '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
      periodic_table[k] +
      '" id="ptElemId' +
      k +
      '" class="ptElemCl' +
      k +
      '">' +
      "   " +
      ptsm[k] +
      "   " +
      "</a>"
  );
  ptCount++;
}
for (var k = 71; k < 86; k++) {
  document.write(
    '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
      periodic_table[k] +
      '" id="ptElemId' +
      k +
      '" class="ptElemCl' +
      k +
      '">' +
      "   " +
      ptsm[k] +
      "   " +
      "</a>"
  );
  ptCount++;
}
document.write("</br>");
for (var i = 86; i < 89; i++) {
  document.write(
    '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
      periodic_table[i] +
      '" id="ptElemId' +
      i +
      '" class="ptElemCl' +
      i +
      '">' +
      "   " +
      ptsm[i] +
      "   " +
      "</a>"
  );
  ptCount++;
}
for (var i = 103; i < 118; i++) {
  document.write(
    '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
      periodic_table[i] +
      '" id="ptElemId' +
      i +
      '" class="ptElemCl' +
      i +
      '">' +
      "   " +
      ptsm[i] +
      "   " +
      "</a>"
  );
  ptCount++;
}
document.write("</br>");
document.write("<center>");
for (var i = 57; i < 71; i++) {
  document.write(
    '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
      periodic_table[i] +
      '" id="ptElemId' +
      i +
      '" class="ptElemCl' +
      i +
      '">' +
      "   " +
      ptsm[i] +
      "   " +
      "</a>"
  );
  ptCount++;
}
document.write("</br>");
for (var k = 89; k < 103; k++) {
  document.write(
    '<a target=”_blank” href="https://en.wikipedia.org/wiki/' +
      periodic_table[k] +
      '" id="ptElemId' +
      k +
      '" class="ptElemCl' +
      k +
      '">' +
      "   " +
      ptsm[k] +
      "   " +
      "</a>"
  );
  ptCount++;
}

document.write("</br>");
document.write("</center>");

// Alkali Metals
var alkali = [2, 10, 18, 36, 54, 86];
alkali.forEach(function (id) {
  var element = document.getElementById("ptElemId" + id);
  if (element) {
    element.classList.add("alkali");
  }
});
// Alkali Metals
var alkalineEarth = [3, 11, 19, 37, 55, 87];
alkalineEarth.forEach(function (id) {
  var element = document.getElementById("ptElemId" + id);
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
    var element = document.getElementById("ptElemId" + i);
    if (element) {
      element.classList.add("transitionMetals");
    }
  }
});
var pastTrans = [12, 30, 48, 49, 80, 81, 82, 83, 84];

pastTrans.forEach(function (id) {
  var element = document.getElementById("ptElemId" + id);
  if (element) {
    element.classList.add("pastTrans");
  }
});
var metalioids = [4, 13, 31, 32, 50, 51];

metalioids.forEach(function (id) {
  var element = document.getElementById("ptElemId" + id);
  if (element) {
    element.classList.add("metalioids");
  }
});
var reactiveNonMetal = [0, 5, 6, 7, 8, 14, 15, 16, 33, 34, 52];

reactiveNonMetal.forEach(function (id) {
  var element = document.getElementById("ptElemId" + id);
  if (element) {
    element.classList.add("reactiveNonMetal");
  }
});
var nobelGas = [1, 9, 17, 35, 53, 85];


nobelGas.forEach(function (id) {
  var element = document.getElementById("ptElemId" + id);
  if (element) {
    element.classList.add("nobelGas");
  }
});
var lanthanides = [{ start: 56, end: 70 }];
lanthanides.forEach(function (range) {
  for (var i = range.start; i <= range.end; i++) {
    var element = document.getElementById("ptElemId" + i);
    if (element) {
      element.classList.add("lanthanides");
    }
  }
});
var actinides = [{ start: 88, end: 102 }];

actinides.forEach(function (range) {
  for (var i = range.start; i <= range.end; i++) {
    var element = document.getElementById("ptElemId" + i);
    if (element) {
      element.classList.add("actinides");
    }
  }
});
var unknown = [{ start: 108, end: 117 }];

unknown.forEach(function (range) {
  for (var i = range.start; i <= range.end; i++) {
    var element = document.getElementById("ptElemId" + i);
    if (element) {
      element.classList.add("unknown");
    }
  }
});
