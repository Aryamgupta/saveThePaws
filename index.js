"use strict";
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//

//

//

function moveToSelected(element) {
  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");
  // .removeClass().
  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");
  //nextRightSecond
  // prevLeftSecond;
  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");
  // ;hideLeft;
  $(nextSecond).nextAll().removeClass().addClass("hideRight");

  $(prevSecond).prevAll().removeClass().addClass("hideLeft");
}

// Eventos teclado
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected("prev");
      break;

    case 39: // right
      moveToSelected("next");
      break;

    default:
      return;
  }
  e.preventDefault();
});

$("#carousel .common").click(function () {
  moveToSelected($(this));
});

$("#prev").click(function () {
  moveToSelected("prev");
});

$("#next").click(function () {
  moveToSelected("next");
});

//
//
//
//
$("b").each(function () {
  $(this).mouseover(function () {
    $(this).addClass("c");
    $("a").children("b").not("c").addClass("b");
  });
  $(this).mouseleave(function () {
    $(this).removeClass("c");
    $("a").children(".b").not(".c").removeClass("b");
  });
});
//
//
// js for top up btn
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

document.querySelectorAll(".crousel_handels>a").forEach(function (ele) {
  ele.setAttribute("href", "#");
});

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
// to display links having no value
const linkvar = document.querySelectorAll("a");
for (let i = 0; i < linkvar.length; i++) {
  if (linkvar[i].getAttribute("href") === "#") {
    linkvar[i].style.display = "none";
  }
}

const branch = document.querySelectorAll(".our_team_indi div");
const short = document.querySelectorAll(".our_team_indi h2 span");
const branchAlign = document.querySelectorAll(".our_team_indi div p");
for (let k = 0; k < branch.length; k++) {
  if (!branch[k].classList.contains("our_teams_indi_links_conatainer")) {
    branch[k].style.height = "70px";
  }
}
for (let k = 0; k < branchAlign.length; k++) {
  branchAlign[k].classList.add("modify");
}
console.log(branchAlign);

for (let k = 0; k < short.length; k++) {
  short[k].textContent = "";
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    scrollToTop();
  }
});

// js for linked in

const footerHeaderGmailChange = new Array(
  linkvar[8],
  linkvar[linkvar.length - 2]
);

const footerLinkedinContent = document.querySelectorAll(
  ".stp_footer_logo span"
);

// nav bar changes

const team = document.querySelectorAll(".stp_nav_item");

team[3].innerHTML =
  '<a class="active stp_nav_item_link" aria-current="page" href="adoptions.html" target="_blank">Adoptions</a>';

document.querySelectorAll(".stp_footer_item>a").forEach(function (ele) {
  if (ele.getAttribute("href") === "tel:+91 9719030358") {
    ele.setAttribute("href", "tel:+91 9930463742");
    // console.log("saa");
  } else if (ele.getAttribute("href") === "mailto:jssstp@gmail.com") {
    ele.setAttribute(
      "href",
      "https://www.linkedin.com/company/save-the-paws/https://twitter.com/savethepawsinfo?s=20&t=Yak9_Ou-dVwfPxALwPCAjg"
    );
    console.log("saa");
  } else if (
    ele.getAttribute("href") ===
    "https://www.instagram.com/invites/contact/?i=p7krs6fbd5l1&utm_content=3wbnmma"
  ) {
    ele.setAttribute(
      "href",
      "https://www.instagram.com/invites/contact/?i=p7krs6fbd5l1&utm_content=3wbnmma"
    );
    console.log("saa");
  }
});

document.querySelectorAll(".stp_footer_logo>h4").forEach(function (ele) {
  ele.textContent = "+91 9930463742";
});
document.querySelectorAll(".stp_footer_logo>span")[0].innerHTML =
  "Save The Paws";

document.querySelectorAll(".stp_footer_logo>span")[1].innerHTML =
  "Save The Paws";

document
  .querySelectorAll("#stp_logo_image>img")[0]
  .setAttribute("src", "images/logo.jpeg");

console.log(
  document
    .querySelector(".stp_footer_container")
    .removeChild(document.querySelectorAll(".stp_footer_item")[4])
);

document.querySelectorAll(".stp_crousel_images_hover").forEach(function (ele) {
  ele.removeChild(".stp_crousel_btn_bar");
});
