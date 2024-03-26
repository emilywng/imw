kaboom({
    background: [157, 208, 255],
    // width: null,
    // height: null
});

// visuals in sprite folder
loadRoot("sprites/")
loadSprite("apple", "apple.png")
loadSprite("stick", "stick.png")
loadSprite("banana", "banana.png")

let score = document.querySelector('#score')
let totalScore = 0

// apples moving in random directions
function spawnApple() {
    const apple = add([
        pos(rand(width()), rand(height())),
        move(rand(width()), rand(height())),
        sprite("apple"),
        area()
    ])
    // removes apple when mouse hovers over it
    apple.onHover(() => {
        destroy(apple)
        totalScore++
        score.innerText = totalScore
        console.log("this will run once when apple is hovered")
    })

    wait(rand(0.5, 1), spawnApple);
}

// sticks moving in random directions
function spawnStick() {
    const stick = add([
        pos(rand(width()), rand(height())),
        move(rand(width()), rand(height())),
        sprite("stick"),
        rotate(rand(180)),
        area()
    ])

    stick.onHover(() => {
        destroy(stick)
        console.log("this will run once when stick is hovered")
    })

    wait(0.5, spawnStick);
}

// banana sprites
function spawnBanana() {
    const banana = add([
        pos(rand(width()), rand(height())),
        move(rand(width()), rand(height())),
        rotate(rand(180)),
        sprite("banana"),
        area()
    ])

    banana.onHover(() => {
        destroy(banana)
        banana.onCollide("banana", () => {
            // go to "lose" scene and pass the score
            go("end");
            burp();
        });
        console.log("this will run once when banana is hovered")
    })

    wait(0.5, spawnBanana);
}

// time bar
function createProgressbar(id, duration, callback) {
    // We select the div that we want to turn into a progressbar
    var progressbar = document.getElementById(id);
    progressbar.className = 'progressbar';
  
    // We create the div that changes width to show progress
    var progressbarinner = document.createElement('div');
    progressbarinner.className = 'inner';
  
    // Now we set the animation parameters
    progressbarinner.style.animationDuration = duration;
  
    // Eventually couple a callback
    if (typeof(callback) === 'function') {
      progressbarinner.addEventListener('animationend', callback);
    }
  
    // Append the progressbar to the main progressbardiv
    progressbar.appendChild(progressbarinner);
  
    // When everything is set up we start the animation
    progressbarinner.style.animationPlayState = 'running';
  }
  
  addEventListener('load', function() {
    createProgressbar('progressbar', '20s', function(){
        if (spawnStick === '1'){
            progressbarinner.style.animationDuration = (duration - "2s");
            console.log("hi")
        }
        alert('Times up!!',);
    });
});


spawnApple()
spawnApple()
spawnApple()
spawnStick()
spawnBanana()


