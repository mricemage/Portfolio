//document.querySelector(CSS selectors)
//Get the first <p>/<html>/<img> element in the document

var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');


var bgcolorForm = document.getElementById('backgroundColor');
var fontForm = document.getElementById('font');
var fColorForm = document.getElementById('fontColor');
var imageForm = document.getElementById('image');

if (!window.localStorage) {console.log("fasle");}

//test whether the storage object has already been populated
//testing to see whether the backgroundcolor item exists
if(!localStorage.getItem('backgroundColor')) {
  populateStorage(); //if not, add the existing customization values to the storage by populateStorage()
} else {
  setStyles(); //update the page styling with the stored values.
}

//Define method populateStorage
//localStorage.setItem(key: string, data: ...): create / update
function populateStorage(){
    localStorage.setItem('backgroundColor', document.getElementById('backgroundColor').value);
    localStorage.setItem('font', document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').value);
    localStorage.setItem('fontColor', document.getElementById('fontColor').value);
    setStyles();
}


//Define method setStyles
function setStyles(){
//Getting values from storage, localStorage: take key then return data
  var currentColor = localStorage.getItem('backgroundColor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');
  var currentfColor = localStorage.getItem('fontColor');
//setting values
  document.getElementById('backgroundColor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;
  document.getElementById('fontColor').value = currentfColor;
//update the styles/decorative image on the page,
 htmlElem.style.backgroundColor = '#' + currentColor;
 pElem.style.fontFamily = currentFont;
 imgElem.setAttribute('src', currentImage);
 pElem.style.color = '#' + currentfColor;
}

//onchange handler: the data and styling is updated whenever a form value is changed
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
fColorForm.onchange = populateStorage;

//NOTE: ----------------------------------------------------------------
// Storage.length: to test whether the storage object is empty or not
//----------------------------------------------------------------------