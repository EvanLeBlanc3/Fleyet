# Fleyet ✈️ (update: realistic clouds, weather badge, clearer photos)

## Updating your existing GitHub repo
1. In your Fleyet repo, upload these files over the old ones: `index.html`, `sw.js`, `manifest.webmanifest`, and the `icons` folder (the icons are unchanged, so you can skip them).
2. Wait ~1 minute for GitHub Pages, then open Fleyet.
3. If the old version still shows, close the app fully (swipe it away) and reopen. The new `sw.js` makes it update itself.

Your proxy URL, theme and settings are kept. Nothing to redo.

## What's new
- **Realistic clouds** in Clear Skies, Golden Hour and Storm Front: procedurally generated, sun-lit, self-shadowed cumulus, flat-bottomed stratus and wispy cirrus on 3 parallax layers. How many clouds you see follows the real cloud cover at your location.
- **Weather badge** (bottom right of the radar): live conditions at wherever Fleyet thinks you are. Tap it for temperature, feels-like, wind, gusts, clouds, visibility, humidity, pressure and a "spotting weather" verdict. Settings → Radar has a switch for it and °F / °C.
- **Aircraft photos**: tapping a plane's card now opens its detail sheet straight away. The photo is checked before it is shown (adsbdb's photo links are sometimes dead), falls back to Planespotters.net, appears full-width and sharp with credit, and tap-to-zoom to full screen. If no photo exists, the space collapses.

## Data sources
| What | Source | Notes |
|---|---|---|
| Planes | adsb.fi through your proxy (adsb.lol as backup) | unchanged |
| Aircraft type, owner, route | adsbdb.com | unchanged |
| Photos | adsbdb.com (airport-data.com), then Planespotters.net | credit shown on the photo |
| Weather | Open-Meteo.com | free, no key, non-commercial, refreshed every 10 min; CC BY 4.0 |

The weather and photo calls go straight from your phone, so your proxy doesn't need changing.
