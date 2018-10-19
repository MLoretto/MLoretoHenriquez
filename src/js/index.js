const icono1 = document.getElementById("icono1");
const icono2 = document.getElementById("icono2");
const icono3 = document.getElementById("icono3");
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
  
  icono1.style.display = 'block';
  icono2.style.display = 'block';
  icono3.style.display = 'block';
  
}

finishedPromise.update = function(anim) {
}

