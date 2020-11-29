/// delete a line => cmd + shift +k
// select a line => cmd + l
// seelect the word when curson on it => cmd + d

// ctrl + g => go to line

//const canvasTable = document.getElementById("tablecanvas");

let canvas = document.querySelector("#sketchcanvas");

let resetBtn = document.getElementById("resetBtn");
let blackBtn = document.getElementById("blackBtn");
let rgbBtn = document.getElementById("rgbBtn");
let inputC = document.getElementById("inputcolor");
let inputCchange = inputC.value;
let sliderBtnInput = document.getElementById("sliderBtn");
// let RGBmode = false;
let getColor = () => "red";

// let colorVariable = "red";

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;

  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

inputC.addEventListener(
  "input",
  function () {
    // colorVariable = inputC.value;
    // RGBmode = false;
    getColor = () => inputC.value;
  },
  false
);

sliderBtn.addEventListener("change", function () {
  tableCreate(sliderBtnInput.value);
});

rgbBtn.addEventListener("click", function getRGB() {
  //   colorVariable = random_rgba();
  getColor = () => random_rgba(); // reference to  different function
  //   RGBmode = true;
});

blackBtn.addEventListener("click", function assignBlack() {
  //   colorVariable = "Black";
  //   RGBmode = false;
  getColor = () => "black";
});

// global variable.. that we assign on table update.
resetBtn.addEventListener("click", function resetColor() {
  tablecanvas.style.background = "none";
  RGBmode = false;
  tableCreate(sliderBtnInput.value);
});

function tableCreate(num) {
  tablecanvas.textContent = "";
  //body reference
  let body = document.getElementsByTagName("tablecanvas");

  // create elements <table> and a <tbody>
  //   let tbl = document.createElement("tablecanvas");
  let tblBody = document.createElement("tbody");

  // cells creation
  for (let j = 0; j < num; j++) {
    // table row creation
    let row = document.createElement("tr");
    for (let i = 0; i < num; i++) {
      // create element <td> and text node
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      let cell = document.createElement("td");
      row.appendChild(cell);
    }

    //row added to end of table body
    tablecanvas.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tablecanvas.appendChild(tblBody);
  updateEvents();
}
// has the evenlisterner for "black"... need to somwhere separate input for black, rgb
// and other custom inputsr
function updateEvents() {
  const tableData = document.querySelectorAll("td");
  tableData.forEach((td) =>
    td.addEventListener("mouseenter", (e) => {
      //   td.style.background = RGBmode ? random_rgba() : colorVariable;
      //   td.style.background = colorVariable;
      td.style.background = getColor();
    })
  );
}

// function updateEventsRGB() {
//   const tableData = document.querySelectorAll("td");
//   tableData.forEach((td) =>
//     td.addEventListener("mouseenter", (e) => {
//       td.style.background = random_rgba();
//     })
//   );
// }

document.addEventListener("DOMContentLoaded", (e) => {
  tableCreate(9);
});
