// Placeholder for Player Setup logic
// You can expand this with interactivity for player customization

document.querySelectorAll('.clear-slot').forEach(btn => {
  btn.addEventListener('click', function() {
    // Logic to clear the slot
    console.log('Clear slot functionality placeholder.');
  });
});

document.querySelectorAll('.type-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Logic to set player type
    console.log('Set player type functionality placeholder.');
  });
});

// Ensure back button exists before adding listener
const backBtn = document.querySelector('.back-btn');
if (backBtn) {
    backBtn.onclick = function() {
      // Navigate back (assuming maps.html exists)
      window.location.href = 'maps.html';
    };
} else {
    console.warn("Back button not found.");
}

// Ensure start button exists before adding listener
const startBtn = document.querySelector('.start-btn');
if (startBtn) {
    startBtn.onclick = function() {
      // Logic to start game
      console.log('Start button functionality placeholder.');
    };
} else {
    console.warn("Start button not found.");
}


// Draw Gun Mayhem-style character sprite on canvas (Based on Reference Image)
function drawPlayerSprite() {
  const canvas = document.getElementById('player-canvas');
  if (!canvas) {
      console.error("Canvas element 'player-canvas' not found.");
      return;
  }
  const ctx = canvas.getContext('2d');

  // Adjust canvas dimensions to match HTML attributes (now 80x100)
  canvas.width = 80;
  canvas.height = 100; // Increased height

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // --- Configuration ---
  const centerX = canvas.width / 2;
  const bottomY = canvas.height - 10; // Base Y for feet
  const bodyWidth = 55; // Wider body
  const bodyHeight = 65; // Taller body/head combo
  const headTopY = 15; // Y coordinate for the top of the head curve
  const legRadiusX = 15; // Horizontal radius for leg ellipse
  const legRadiusY = 8;  // Vertical radius for leg ellipse
  const armRadiusX = 8;  // Horizontal radius for arm ellipse
  const armRadiusY = 10; // Vertical radius for arm ellipse
  const outlineWidth = 4; // Bold outline
  const bodyColor = '#bdbdbd'; // Grey body (as requested, color doesn't matter for now)
  const outlineColor = '#000000'; // Black outline
  const faceColor = '#FFFFFF'; // White eyes
  const pupilColor = '#000000'; // Black pupils/mouth

  // --- Helper Function for Outlining ---
  // Draws fill first, then outline on top
  function drawAndOutline(drawFunction, fillColor) {
    ctx.save();
    // Draw Fill
    ctx.fillStyle = fillColor;
    drawFunction(); // Execute the drawing path logic
    ctx.fill();

    // Draw Outline
    ctx.lineWidth = outlineWidth;
    ctx.strokeStyle = outlineColor;
    // Redraw path for stroke
    drawFunction(); // Execute the drawing path logic again
    ctx.stroke();
    ctx.restore();
  }

  // --- Draw Body/Head Shape ---
  // This uses bezier curves to create a more organic, merged shape
  drawAndOutline(() => {
    ctx.beginPath();
    ctx.moveTo(centerX - bodyWidth / 2, bottomY - legRadiusY); // Start at bottom left base
    // Left side curve up to head
    ctx.bezierCurveTo(
        centerX - bodyWidth / 2 - 10, bottomY - bodyHeight * 0.6, // Control point 1 (outward bulge)
        centerX - bodyWidth / 2 + 5, headTopY + 10,             // Control point 2 (inward curve near top)
        centerX - 5, headTopY                                   // Top-left head point
    );
    // Top of head curve
    ctx.bezierCurveTo(
        centerX, headTopY - 5,                                  // Control point 1 (slightly above center)
        centerX + 15, headTopY,                                 // Control point 2 (top right curve start)
        centerX + bodyWidth / 2 - 10, headTopY + 20             // Top-right head point (lower than left)
    );
    // Right side curve down to base
    ctx.bezierCurveTo(
        centerX + bodyWidth / 2 + 5, headTopY + bodyHeight * 0.5, // Control point 1 (outward bulge)
        centerX + bodyWidth / 2 + 10, bottomY - legRadiusY - 10, // Control point 2 (slight inward curve)
        centerX + bodyWidth / 2, bottomY - legRadiusY             // Bottom right base
    );
    // Bottom curve (slight arc between legs)
     ctx.arcTo(
         centerX, bottomY, // Control point for arc
         centerX - bodyWidth / 2, bottomY - legRadiusY, // End point
         20 // Radius of the arc
     );

    ctx.closePath();
  }, bodyColor);


  // --- Draw Legs (Simple Ellipses) ---
  const legY = bottomY - legRadiusY / 2;
  // Left Leg
  drawAndOutline(() => {
    ctx.beginPath();
    ctx.ellipse(centerX - bodyWidth / 2 + legRadiusX * 0.8, legY, legRadiusX, legRadiusY, Math.PI * 0.1, 0, Math.PI * 2);
  }, bodyColor);

  // Right Leg
  drawAndOutline(() => {
    ctx.beginPath();
    ctx.ellipse(centerX + bodyWidth / 2 - legRadiusX * 0.8, legY, legRadiusX, legRadiusY, -Math.PI * 0.1, 0, Math.PI * 2);
  }, bodyColor);


  // --- Draw Arms (Simple Ellipses) ---
  const armY = headTopY + bodyHeight * 0.6;
  // Left Arm (Partially hidden/integrated) - Draw outline only for separation
   ctx.save();
   ctx.lineWidth = outlineWidth;
   ctx.strokeStyle = outlineColor;
   ctx.beginPath();
   ctx.ellipse(centerX - bodyWidth / 2 + 5, armY, armRadiusX, armRadiusY, Math.PI * 0.8, 0, Math.PI * 1.2); // Draw partial ellipse outline
   ctx.stroke();
   ctx.restore();

  // Right Arm
  drawAndOutline(() => {
    ctx.beginPath();
    ctx.ellipse(centerX + bodyWidth / 2 - armRadiusX / 2, armY, armRadiusX, armRadiusY, -Math.PI * 0.2, 0, Math.PI * 2);
  }, bodyColor);


  // --- Draw Face (Reference Style) ---
  ctx.save();

  const eyeCenterY = headTopY + 25;
  const eyeDistX = 15; // Distance from center X
  const eyeWidth = 12;
  const eyeHeight = 6; // Taller eyes than before
  const pupilRadius = 2;

  // Left Eye (White Background)
  ctx.fillStyle = faceColor;
  ctx.beginPath();
  ctx.ellipse(centerX - eyeDistX, eyeCenterY, eyeWidth / 2, eyeHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Right Eye (White Background)
  ctx.beginPath();
  ctx.ellipse(centerX + eyeDistX, eyeCenterY, eyeWidth / 2, eyeHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eye Outlines
  ctx.lineWidth = outlineWidth / 1.5;
  ctx.strokeStyle = outlineColor;
  ctx.beginPath();
  ctx.ellipse(centerX - eyeDistX, eyeCenterY, eyeWidth / 2, eyeHeight / 2, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(centerX + eyeDistX, eyeCenterY, eyeWidth / 2, eyeHeight / 2, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Pupils (Looking forward/slightly right)
  ctx.fillStyle = pupilColor;
  ctx.beginPath();
  ctx.arc(centerX - eyeDistX + 2, eyeCenterY, pupilRadius, 0, Math.PI * 2); // Left pupil
  ctx.fill();
  ctx.beginPath();
  ctx.arc(centerX + eyeDistX + 2, eyeCenterY, pupilRadius, 0, Math.PI * 2); // Right pupil
  ctx.fill();

  // Eyelids (Straight line across top part of eye)
   ctx.lineWidth = outlineWidth; // Thicker line for eyelid
   ctx.strokeStyle = outlineColor;
   ctx.beginPath();
   ctx.moveTo(centerX - eyeDistX - eyeWidth / 2, eyeCenterY - eyeHeight / 4);
   ctx.lineTo(centerX - eyeDistX + eyeWidth / 2, eyeCenterY - eyeHeight / 4);
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo(centerX + eyeDistX - eyeWidth / 2, eyeCenterY - eyeHeight / 4);
   ctx.lineTo(centerX + eyeDistX + eyeWidth / 2, eyeCenterY - eyeHeight / 4);
   ctx.stroke();


  // Mouth (Small, straight line)
  const mouthY = eyeCenterY + 15;
  const mouthWidth = 12;
  ctx.lineWidth = outlineWidth / 1.5;
  ctx.strokeStyle = pupilColor;
  ctx.beginPath();
  ctx.moveTo(centerX - mouthWidth / 2, mouthY);
  ctx.lineTo(centerX + mouthWidth / 2, mouthY);
  ctx.stroke();

  ctx.restore();
}

// Initial draw when script loads
// Ensure the DOM is ready before drawing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', drawPlayerSprite);
} else {
    drawPlayerSprite(); // DOMContentLoaded has already fired
}
