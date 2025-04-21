// Example map data. Replace image filenames with your own map preview assets.
const maps = [
  { name: 'Jungle', img: 'assets/maps/jungle.png' },
  { name: 'Ski Lift', img: 'assets/maps/skilift.png' },
  { name: 'Space Station', img: 'assets/maps/spacestation.png' },
  { name: 'Avalon', img: 'assets/maps/avalon.png' },
  { name: 'Venice', img: 'assets/maps/venice.png' },
  { name: 'Alien Planet', img: 'assets/maps/alienplanet.png' },
  { name: 'Sub Base', img: 'assets/maps/subbase.png' },
  { name: 'Highway', img: 'assets/maps/highway.png' },
  { name: 'Castle', img: 'assets/maps/castle.png' },
  { name: 'Safari Showdown', img: 'assets/maps/safari.png' },
  { name: 'Grim City', img: 'assets/maps/grimcity.png' },
  { name: 'Polar Pwn4ge', img: 'assets/maps/polar.png' },
  { name: 'Midnight Wood', img: 'assets/maps/midnightwood.png' },
  { name: 'Hovering Houses', img: 'assets/maps/hoveringhouses.png' },
  { name: 'Desert Destruction', img: 'assets/maps/desert.png' },
  { name: 'Mushroom Mountain', img: 'assets/maps/mushroom.png' },
  { name: 'Great Wall Brawl', img: 'assets/maps/greatwall.png' },
  { name: 'Solar Shootout', img: 'assets/maps/solar.png' },
  { name: 'Underwater Slaughter', img: 'assets/maps/underwater.png' },
  { name: 'Dessert Duel', img: 'assets/maps/dessert.png' },
  { name: 'No Name', img: 'assets/maps/noname.png' }
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
    const img = document.createElement('img');
    img.src = map.img;
    img.alt = map.name + ' Thumb';
    img.className = 'carousel-thumb-img';
    img.onerror = function() {
      this.src = 'assets/maps/placeholder.png';
    };
    const title = document.createElement('div');
    title.className = 'carousel-thumb-title';
    title.textContent = map.name;
    thumb.appendChild(img);
    thumb.appendChild(title);
    thumb.onmouseenter = () => selectMap(idx);
    thumb.onclick = () => selectMap(idx);
    carouselElem.appendChild(thumb);
  });
}

function selectMap(idx) {
  selectedIdx = idx;
  renderCarousel();
  largeMapImg.src = maps[idx].img;
  largeMapImg.alt = maps[idx].name + ' Preview';
  largeMapTitle.textContent = maps[idx].name;
  largeMapImg.onerror = function() {
    this.src = 'assets/maps/placeholder.png';
    this.alt = 'Preview Not Found';
  };
  // Only scroll if needed, and use instant scroll to avoid animation 'shake'
  const thumb = carouselElem.children[idx];
  if (thumb && (thumb.offsetLeft < carouselElem.scrollLeft || (thumb.offsetLeft + thumb.offsetWidth) > (carouselElem.scrollLeft + carouselElem.offsetWidth))) {
    thumb.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
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
  window.location.href = 'index.html';
};
document.getElementById('continue-btn').onclick = () => {
  window.location.href = 'character-select.html';
};

// Initial render
renderCarousel();
selectMap(0);
