// A function that creates any number of same type of element and push then to 
// an empty array (els)
// Parameter el is the element you want to create e.g "div"
// Parameter no is the number of that element you want to create
const createEl = (el, no) => {
  const els = [];
  for (let i = 0; i < no; i++) {
      els.push(document.createElement(el));
  }
  return els;
};


// A function that adds to list of classes of elements in a containing element
// Parameter el is the parent element you want to add a class its children element
// Parameter newClass is the class to be added
const addClass = (el, newClass) => {
  for(const prop of el) {
    prop.classList.add(newClass);
  }
};


// A function that adds an id to an element
// el is the element you want to add an id to
// newId is the id to be added
const addId = (el, newId) => {
  el.id = newId;
};


const favColourDivs = createEl("div", 10);
addClass(favColourDivs, "rectangle");

const colours = ["a3e9ff", "b4fd08", "d2dee7", "f9e704", "f204f9",
                  "a61858", "c9e87d", "e20201", "ffffff", "fb6542"];

const colourText = createEl("span", 10);
addClass(colourText, "colourText");


const wrapperDiv = document.getElementById("rectangleWrapper");

for (let i = 0; i < colours.length; i++) {
  addId(favColourDivs[i], colours[i]);
  colourText[i].innerText = colours[i];
  favColourDivs[i].appendChild(colourText[i]);
  wrapperDiv.appendChild(favColourDivs[i]);
}

const printMessage = () => {
  console.log("Here are the rectangle IDs");
  let offset = 0;
  for(const prop of colours) {
    setTimeout(function() {
      console.log(prop);
    }, 1000 + offset);
    offset += 1000;
  }
};

const htmlBody = document.querySelector("body");
htmlBody.onload = printMessage();