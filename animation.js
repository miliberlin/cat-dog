//deleting cats

const cat = document.getElementsByClassName("cat");

for (let i = 0; i < cat.length; i++) {
  cat[i].addEventListener('click', function() {
    this.parentNode.removeChild(this);
    if (cat.length === 0) {
      whenCatEmpty()
    }
  });
}

function whenCatEmpty() {
  // congrats text
  
  // add video
const iframe = document.createElement("iframe");
iframe.src = "https://www.youtube.com/embed/SB-qEYVdvXA?autoplay=1";
iframe.width = "560";
iframe.height = "315";
iframe.setAttribute("allow", "autoplay");
document.getElementById("inner").appendChild(iframe);
}

// text animation
// credits: https://tobiasahlin.com/moving-letters/#3

var textWrapper = document.querySelector('.ml3');

anime.timeline({loop: false})
  .add({
    targets: '.ml3',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3000,
    delay: (el, i) => 100 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000
  });

  