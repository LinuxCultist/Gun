// Example map data. Replace image filenames with your own map preview assets.
const maps = [
  { name: 'Jungle', color: '#4CAF50' },
  { name: 'Ski Lift', color: '#03A9F4' },
  { name: 'Space Station', color: '#8E24AA' },
  { name: 'Avalon', color: '#FFEB3B' },
  { name: 'Venice', color: '#2196F3' },
  { name: 'Alien Planet', color: '#FF9800' },
  { name: 'Sub Base', color: '#607D8B' },
  { name: 'Highway', color: '#F44336' },
  { name: 'Castle', color: '#795548' },
  { name: 'Safari Showdown', color: '#E91E63' },
  { name: 'Grim City', color: '#212121' },
  { name: 'Polar Pwn4ge', color: '#FFFFFF' },
  { name: 'Midnight Wood', color: '#388E3C' },
  { name: 'Hovering Houses', color: '#009688' },
  { name: 'Desert Destruction', color: '#FBC02D' },
  { name: 'Mushroom Mountain', color: '#7B1FA2' },
  { name: 'Great Wall Brawl', color: '#AFB42B' },
  { name: 'Solar Shootout', color: '#FFD600' },
  { name: 'Underwater Slaughter', color: '#00BCD4' },
  { name: 'Dessert Duel', color: '#FFB74D' },
  { name: 'No Name', color: '#BDBDBD' }
];

const carouselElem = document.getElementById('map-carousel');
const largeMapImg = document.getElementById('large-map-img');
const largeMapTitle = document.getElementById('large-map-title');

let selectedIdx = 0;
let carouselScroll = 0;

function renderCarousel() {
  carouselElem.innerHTML = '';
  maps.forEach((map, idx) => {
    const thumb = document.createElement('div');
    thumb.className = 'carousel-thumb' + (idx === selectedIdx ? ' selected' : '');
    thumb.tabIndex = 0;
    // Instead of image, use a colored div
    const colorBox = document.createElement('div');
    colorBox.className = 'carousel-thumb-color';
    colorBox.style.background = map.color;
    colorBox.style.width = '48px';
    colorBox.style.height = '32px';
    colorBox.style.borderRadius = '6px';
    colorBox.style.margin = '0 auto 4px auto';
    const title = document.createElement('div');
    title.className = 'carousel-thumb-title';
    title.textContent = map.name;
    thumb.appendChild(colorBox);
    thumb.appendChild(title);
    thumb.onmouseenter = () => selectMap(idx, false); // Pass false to indicate hover
    thumb.onclick = () => selectMap(idx, true); // Pass true to indicate click
    carouselElem.appendChild(thumb);
  });
}

function selectMap(idx, doScroll = true) {
  selectedIdx = idx;
  renderCarousel();
  // Instead of image, set the background color of the preview panel
  largeMapImg.style.display = 'none';
  let previewPanel = document.querySelector('.large-map-frame');
  previewPanel.style.background = maps[idx].color;
  previewPanel.style.borderRadius = '8px';
  previewPanel.style.border = '2px solid #222';
  largeMapTitle.textContent = maps[idx].name;
  // Improved centering logic for the carousel
  if (doScroll) {
    const thumb = carouselElem.children[idx];
    if (thumb) {
      // Center the selected thumb in the visible area of the carousel
      const carouselWidth = carouselElem.clientWidth;
      const thumbLeft = thumb.offsetLeft;
      const thumbWidth = thumb.offsetWidth;
      const scrollTo = thumbLeft - (carouselWidth / 2) + (thumbWidth / 2);
      carouselElem.scrollTo({ left: scrollTo, behavior: 'auto' });
    }
  }
}

document.getElementById('carousel-left').onclick = () => {
  selectedIdx = (selectedIdx - 1 + maps.length) % maps.length;
  selectMap(selectedIdx);
};
document.getElementById('carousel-right').onclick = () => {
  selectedIdx = (selectedIdx + 1) % maps.length;
  selectMap(selectedIdx);
};
document.getElementById('back-main').onclick = () => {
  window.location.href = 'custom-game.html';
};
document.getElementById('continue-btn').onclick = () => {
  window.location.href = 'character-select.html';
};

// Initial render
renderCarousel();
selectMap(0);
