# Fleyet ✈️ (update: compass + top spacing)

## Updating your repo
Upload `index.html` and `sw.js` over the old ones, wait a minute, then fully close and reopen the app. Your proxy URL and settings are kept.

## What's new
- **Top spacing**: the header sits lower (34px, was 16px). Fine-tune it in **Settings → Display → Top spacing** if the Dynamic Island still makes the top look fuzzy. It's saved on your phone.
- **Compass**: tap the 🧭 button on the right side of the radar. iPhone asks for Motion & Orientation access once: tap **Allow**.
  - The radar turns so what you're facing is always at the top, with a "field of view" wedge.
  - A readout shows your heading, how far up/down you're pointing, and how many planes are in view.
  - Planes inside the wedge get a ring, and a soft chime plays when one lines up dead ahead.
  - Open a plane and the blue banner becomes live: "Turn right 40°", "tilt up 12°", then "Dead ahead!".
  - Tap the compass again (or the north-arrow button) to switch it off. Settings has a Narrow / Normal / Wide field of view.
  - Hold the phone upright like you're taking a photo of the sky. If the heading feels off, wave it in a figure 8 to calibrate.

---

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
