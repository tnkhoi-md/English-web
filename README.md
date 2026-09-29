# Tnkhoi English — Personal Learning System

**Version 29.9.26 · Built by Nguyên Khôi · © KhoiTN-MD**

A personal English-learning prototype for long-term self-study.

## What's new in 29.9.26
- Fixed study timer: opening a lesson does **not** count study time.
- Study time starts only after **Start learning**.
- Active session time and accumulated study time are separated.
- Added Library, Review, Achievements and Progress views.
- Added Author Corner.
- Added local JSON export/import backup.
- Added clearer data-storage wording: current data is local to the browser/device.
- Kept iPad/Safari-safe delegated interaction for multiple-choice buttons.
- Refined iPad layout: clearer spacing between cards/sections, compact lesson header, improved content width and hierarchy.
- Fixed brand styling so the logo and Tnkhoi English wordmark no longer overlap.
- Added semantic lesson colors for Vocabulary, Listening, Grammar, Pronunciation, Speaking and Mediation.
- Refined typography, line-height, button spacing, examples and expandable sections for easier reading.

## Data
The prototype stores learning data in browser `localStorage`. Reloading the page does not normally erase it, but another device/browser has a separate local store. Use **Settings → Export backup** to move data manually. Cloud account sync is reserved for a later architecture phase.

## Run
Open `index.html` in a browser or deploy the folder to GitHub Pages.
