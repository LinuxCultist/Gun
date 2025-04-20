// Add navigation for main menu buttons
const menuButtons = document.querySelectorAll('.menu button');

if (menuButtons.length > 0) {
  menuButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = btn.textContent.trim();
      if (text === 'CUSTOM GAME') {
        window.location.href = 'custom-game.html';
      }
      // You can add more navigation for other buttons here
    });
  });
}
