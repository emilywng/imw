kaboom({
    background: [157, 208, 255],
});

// visuals in sprite folder
loadSprite("apple", "sprites/apple.png")
loadSprite("stick", "sprites/stick.png")
loadSprite("banana", "sprites/banana.png")

// apples moving in random directions
function spawnApple() {
    const apple = add([
        pos(rand(width()), rand(height())),
        move(rand(width()), rand(height())),
        sprite("apple"),
        area()
    ])
    // removes apple when mouse hovers over it and player gains 1 point
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
    // removes stick when mouse hovers over it and player loses 1 point
    stick.onHover(() => {
        destroy(stick)
        score.innerText = totalScore -1
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
    // removes banana when mouse hovers over it and game ends
    banana.onHover(() => {
        destroy(banana),
        alert("Oh no! You touched a banana :( Click OK to try again")
        {window.location.reload();};
        console.log("this will run once when banana is hovered")
    })

    wait(0.5, spawnBanana);
}

// counts how many apples/sticks collected
let score = document.querySelector('#score')
let totalScore = 0

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
        alert('Times up!! Thanks for playing :) Click OK to play again!')
        {window.location.reload();};
    });
});

// calling sprite functions
spawnApple()
spawnApple()
spawnApple()
spawnStick()
spawnBanana()

// forces webpage to open at the top of the page
window.scrollTo(0, 0);

// *REFERENCES*
// https://kaboomjs.com/doc/intro
// https://docs.replit.com
// https://jefferson-cuartas.medium.com/intro-to-kaboom-a-javascript-library-for-game-development-e2b252ee8439
// https://stackoverflow.com
