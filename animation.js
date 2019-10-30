// text animation
// credits: https://tobiasahlin.com/moving-letters/#3

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 100 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000
  });

//deleting cats

const cat = document.querySelectorAll(".cat");

function remove() {
  this.parentNode.removeChild(this);
}

for (i = 0; i < cat.length; i++) {
  cat[i].addEventListener('click', remove, false);
}
