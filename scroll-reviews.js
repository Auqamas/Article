document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.getElementById('reviewScroller');
  let scrollAmount = 0;

  function autoScroll() {
    if (!scroller) return;
    
    scrollAmount += 1;
    scroller.scrollLeft = scrollAmount;

    // Reset if we hit the end (loop effect)
    if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
      scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
