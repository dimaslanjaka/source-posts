document.addEventListener('DOMContentLoaded', function (_event) {
  // scroll to top for reset position
  window.scrollTo({ top: 0, behavior: 'smooth' });
  //document.write(document.body.scrollHeight);
  scrollToSmoothly(document.body.scrollHeight, 1 * 60 * 1000);
  //window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

/**
 * Scroll smooth
 * @param {number} pos the y-position to scroll to (in pixels)
 * @param {number} time the exact amount of time the scrolling will take (in milliseconds)
 */
function scrollToSmoothly(pos, time) {
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    var progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (currentPos == pos) {
      console.log('At pointed position');
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}
