document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.flex.text-yellow-400');

  stars.forEach(starRow => {
    const starCount = starRow.querySelectorAll('span').length;
    const rating = starCount;

    starRow.innerHTML = '';

    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.innerText = '☆';
      starRow.appendChild(star);
      if (i < rating) {
        setTimeout(() => {
          star.innerText = '★';
        }, i * 200);
      }
    }
  });
});
