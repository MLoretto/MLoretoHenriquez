const menu = document.getElementById("menuLink");
let finishedPromise = anime({
    targets: ['path'],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: false
});
let promise = finishedPromise.finished.then(logFinished);
function logFinished() {
  console.log('Termine');
  menu.style.display = 'block';
}

finishedPromise.update = function(anim) {
}

