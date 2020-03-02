//////////////////////  1  //////////////////////

let footer = document.getElementsByTagName("footer")[0];
let clickCount = 1;
let onFooterClick = function(e){
  console.log("clic numéro " + clickCount);
  clickCount++;
};
footer.addEventListener("click", onFooterClick);

//////////////////////  2  //////////////////////

let menuBtn = document.getElementsByClassName("navbar-toggler")[0];
let headerEl = document.getElementById("navbarHeader");
let onMenuBtnClick = function(e){
  headerEl.classList.toggle("collapse");
};
menuBtn.addEventListener("click", onMenuBtnClick);

//////////////////////  3  //////////////////////

let editBtn1 = document.querySelectorAll(".card-body .btn-outline-secondary")[0];
let onEditBtn1Click = function(){
  this.closest(".card-body").style.color = "red";
};
editBtn1.addEventListener("click", onEditBtn1Click);

//////////////////////  4  //////////////////////

let card2 = document.querySelectorAll(".container .card")[1];
let editBtn2 = card2.getElementsByClassName("btn")[1];
let onEditBtn2Click = function(){
  if (card2.style.color=="green"){
    card2.style.color = "";
  } else {
    card2.style.color = "green";
  };
};
editBtn2.addEventListener("click", onEditBtn2Click);

//////////////////////  5  //////////////////////

let headerEl2 = document.getElementsByTagName("header")[0];
let linkTag = document.getElementsByTagName("link")[0];
let onHeaderClick = function(){
  linkTag.disabled = !linkTag.disabled
};
headerEl2.addEventListener("dblclick", onHeaderClick);

//////////////////////  6  //////////////////////

let cards = document.querySelectorAll(".container .card");

for(let i=0; i<document.querySelectorAll(".container .card").length; i++){
  let viewBtn = cards[i].getElementsByClassName("btn")[0];
  let cardTxt = cards[i].getElementsByClassName("card-text")[0];
  let cardImg = cards[i].getElementsByClassName("card-img-top")[0];
  function onViewBtnHover(){
    if (cardTxt.style.display === "none"){
      cardImg.style.width = "100%";
      cardTxt.style.display = "block";
    } else {
      cardImg.style.width = "20%";
      cardTxt.style.display = "none";
    };
  };
  viewBtn.addEventListener("mouseover", onViewBtnHover);
}

//////////////////////  7  //////////////////////

let rightArrow = document.querySelectorAll(".jumbotron .btn-secondary")[0];
let cardsParent = document.querySelectorAll(".container .row .col-md-4")[0].parentNode;
function onRightArrowClick(){
  cardsParent.insertBefore(cardsParent.getElementsByClassName("col-md-4")[5], cardsParent.getElementsByClassName("col-md-4")[0]);
};
rightArrow.addEventListener("click", onRightArrowClick);

//////////////////////  8  //////////////////////

let leftArrow = document.querySelectorAll(".jumbotron .btn-primary")[0];
function onLeftArrowClick(e){
  e.preventDefault();
  cardsParent.insertBefore(cardsParent.getElementsByClassName("col-md-4")[0], cardsParent.getElementsByClassName("col-md-4")[5].nextSibling);
};
leftArrow.addEventListener("click", onLeftArrowClick);

//////////////////////  9  //////////////////////

let title = document.querySelector(".navbar .container").getElementsByTagName("a")[0];
let body = document.querySelector("body");
function onKeyPress(e){
  if (e.target == title){
    console.log(e.key);
    switch (e.key){
      case 'a':
        body.removeAttribute("class");
        body.classList.add("class");
        body.setAttribute("class", "col-4");
        break;
      case 'y':
        body.removeAttribute("class");
        body.classList.add("class");
        body.setAttribute("class", "col-4 offset-md-4");
        break;
      case 'p':
        body.removeAttribute("class");
        body.classList.add("class");
        body.setAttribute("class", "col-4 offset-md-8");
        break;
      case 'b':
        body.removeAttribute("class");
    };
  };
};
window.addEventListener("keypress", onKeyPress);