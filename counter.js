document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const isPercentage = counter.textContent.includes("%");
    const isPlus = counter.textContent.includes("+");

    const duration = 2000; // total animation time in ms
    const frameRate = 30; // updates per second
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const countUp = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = target * progress;

      if (progress >= 1) {
        clearInterval(countUp);
        counter.textContent = isPercentage
          ? `${target}%`
          : isPlus
          ? `${Math.floor(target)}+`
          : target;
      } else {
        counter.textContent = isPercentage
          ? `${(currentValue).toFixed(2)}%`
          : isPlus
          ? `${Math.floor(currentValue)}+`
          : `${Math.floor(currentValue)}`;
      }
    }, 1000 / frameRate);
  });
});
