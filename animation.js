// item = dog/cat

// deleting items

const item = document.getElementsByClassName("item");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function() {
    this.parentNode.removeChild(this);
    if (item.length === 0) {
      whenItemEmpty()
    }
  });
}

function whenItemEmpty() {
  // congrats text
  setTimeout(function(){ 
    const congratsText = document.createElement("h1");
    congratsText.setAttribute("class", "ml3");
    congratsText.innerHTML = ("Awesome!<br>You did it!");
    document.getElementById("inner").appendChild(congratsText);
    }, 500);

  // add video
  setTimeout(function(){
    const iframe = document.createElement("iframe");
    if (window.location.href==="file:///Users/Michelle/Desktop/7projects-7days/cat-dog/cat.html") {
      iframe.src = "https://www.youtube.com/embed/SB-qEYVdvXA?autoplay=1";
    }
    else {
      iframe.src = "https://www.youtube.com/embed/mRf3-JkwqfU?start=8?autoplay=1";
    }
    iframe.width = "560";
    iframe.height = "315";
    iframe.setAttribute("allow", "autoplay");
    document.getElementById("inner").appendChild(iframe);
    // add return button
    const returnBtn = document.createElement("a");
    returnBtn.setAttribute("href", "index.html");
    returnBtn.setAttribute("id", "return-btn");
    returnBtn.setAttribute("class", "btn");
    const returnBtnText = document.createElement("div");
    returnBtnText.innerHTML = ("Play again");    document.getElementById("inner").appendChild(returnBtn);
    document.getElementById("return-btn").appendChild(returnBtnText);
  }, 4000);
}

// text animation
// credits: https://tobiasahlin.com/moving-letters/#3

var textWrapper = document.querySelector('.ml3');

anime.timeline({loop: false})
  .add({
    targets: '.ml3',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2500,
    delay: (el, i) => 100 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000
  });

  