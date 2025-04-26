# Gun Mayhem 3: Base Remake - Architecture Overview

## High-Level Structure

- **Game Loop**: Handles input, updates game state, processes physics, and renders each frame.
- **Scene System**: Each level/arena is a scene with platforms and spawn points.
- **Entities**:
  - **Player**: Handles movement, jumping, shooting, knockback, lives, respawn logic.
  - **Projectile**: Bullet entity, spawned by player, checks for collisions.
  - **Platform**: Static collision objects.
  - **Game Manager**: Tracks player states, lives, round status, and win condition.

## Key Components

- **Input Handler**: Maps keyboard/controller input to player actions.
- **Physics Engine**: (Godot built-in) Manages movement, collisions, knockback.
- **UI Layer**: Displays player lives, winner announcement.

## File/Folder Structure (Godot Example)

- `/scenes/` — Main scene, player, platform, projectile scenes
- `/scripts/` — Player.gd, Projectile.gd, GameManager.gd, InputHandler.gd
- `/assets/` — Sprites, sounds
- `/ui/` — UI scenes and scripts

## Data Flow

1. Input events update player state.
2. Player actions (move/jump/shoot) update physics and spawn projectiles.
3. Projectiles check collision with players/platforms.
4. GameManager updates lives/knockback and checks for round end.
5. UI updates reflect game state.

## Multiplayer (Base)
- Each player is a separate entity with unique input bindings.
- All logic is local (no networking).

---

This architecture supports the base game plan and is easy to extend for future features (AI, more weapons, etc). See implementation-plan.md for step-by-step build order.
