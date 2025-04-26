# Gun Mayhem 3: Base Remake - Game Design Document (Updated)

## Overview
A chaotic 2D arena shooter. Players shoot, jump, and try to knock each other off the map. The last player with remaining lives wins the round.

## Game Mode
- Local Multiplayer (2–4 players)
- Round-based: each player has 3 lives (default)

## Mechanics
- Movement: Left, Right, Jump, Double Jump
- Shooting: Straight or directional (limited base version: straight)
- Knockback increases with repeated hits
- No health bar or visible damage — only lives shown
- Player loses a life if they fall off the map

## Characters
- Basic player avatar
- One weapon (pistol or SMG)
- Respawns at pre-defined spawn point

## UI
- Player lives represented by icons or number
- No damage meter, no health bar

# Gun Mayhem 3 - Base Remake Plan (No Visible Damage)

## Phase 1: Player Movement

### Step 1: Movement and Jump
- Add basic left/right movement and jump
- Implement double jump
- Use physics or velocity-based control

**✅ Test**: Player moves left/right and double jumps once mid-air.

---

## Phase 2: Platforms and Collision

### Step 2: Create arena with platforms
- Add multiple static platforms
- Enable collision between player and platforms

**✅ Test**: Player stands, jumps, and lands correctly on platforms.

---

## Phase 3: Weapon & Shooting

### Step 3: Gun fires projectiles
- Add a projectile object that shoots from player
- Bullet moves at fixed speed and despawns on impact

**✅ Test**: Player can fire bullets that travel in a straight line and disappear when hitting walls.

---

### Step 4: Add player hit detection
- When a bullet hits another player, it applies a velocity/force in the impact direction
- Internally increase player "momentum" with each hit

**✅ Test**: Bullets knock back players slightly on hit; repeat hits increase launch distance.

---

## Phase 4: Knockback and Elimination

### Step 5: Knockback system
- Add internal "momentum" or hit count per player
- Use that to scale knockback force
- Knockback vector = direction of bullet * force multiplier

**✅ Test**: Repeated bullet hits push players farther; physics feels responsive and chaotic.

---

### Step 6: Death zone detection
- Add map boundaries (bottom or side)
- If player exits camera bounds or hits death trigger, they lose a life

**✅ Test**: Player who falls off map loses 1 life, then respawns.

---

## Phase 5: Lives and UI

### Step 7: Track and display lives
- Each player starts with 3 lives
- Show lives remaining as text or icons

**✅ Test**: Lives decrease when player falls. Display updates correctly.

---

### Step 8: Game over condition
- When only 1 player has lives left, round ends

**✅ Test**: Game ends and announces winner when all others are eliminated.

---

## Phase 6: Add Player 2

### Step 9: Local Multiplayer (2 players)
- Add second player prefab with unique controls
- Each player has independent lives and respawn logic

**✅ Test**: Both players can fight, knock each other off, and lives track separately.