const scroller = document.querySelector('.card-scroller');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');

const scrollAmount = 220; // Amount to scroll on each button press

leftButton.addEventListener('click', () => {
  scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  updateButtons();
});

rightButton.addEventListener('click', () => {
  scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  updateButtons();
});

scroller.addEventListener('scroll', updateButtons);

function updateButtons() {
  leftButton.disabled = scroller.scrollLeft <= 0;
  rightButton.disabled = scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth;
}

// Initialize button states
updateButtons();