// Simple script for toggling modes and options
const modeButtons = document.querySelectorAll('.mode');
const detailsTitle = document.querySelector('.mode-details-title');
const detailsDesc = document.querySelector('.mode-details-desc');

const modeInfo = [
  { title: 'Last Man Standing', desc: 'Free for all. Last player alive wins.' },
  { title: 'Last Team Standing', desc: 'Teams. Last team with a player wins.' },
  { title: 'SURVIVAL', desc: 'Survive as long as you can.' },
  { title: '1 Hit 1 Kill', desc: 'One shot eliminates players.' },
  { title: 'Gun Game', desc: 'Level up weapons with each kill.' },
  { title: 'Gun Game REVERSED', desc: 'Downgrade weapons with each kill.' }
];

modeButtons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    modeButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    detailsTitle.textContent = modeInfo[idx].title;
    detailsDesc.textContent = modeInfo[idx].desc;
  });
});

// Comic-style toggle logic for checkmark/x
function setToggleState(toggleBox, checked) {
  if (checked) {
    toggleBox.classList.add('checked');
  } else {
    toggleBox.classList.remove('checked');
  }
}

document.querySelectorAll('.toggle-box').forEach(toggleBox => {
  // Default to checked
  setToggleState(toggleBox, true);
  toggleBox.addEventListener('click', function(e) {
    e.preventDefault();
    setToggleState(this, !this.classList.contains('checked'));
  });
});

// Navigation
const backBtn = document.querySelector('.back-btn');
if (backBtn) {
  backBtn.onclick = () => { window.location.href = 'index.html'; };
}
