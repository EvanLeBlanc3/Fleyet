# Fleyet ✈️
See which planes are flying near you, right now. iPhone-first, portrait-locked, offline-installable, built for personal use.

## Put it on GitHub Pages (same as your other apps)
1. Create a repo (e.g. `fleyet`) and upload **everything in this folder** to the repo root (`index.html`, `sw.js`, `manifest.webmanifest`, `icons/`, `worker/`).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. On your iPhone open `https://<your-username>.github.io/fleyet/` in **Safari** → Share → **Add to Home Screen**.
4. Open Fleyet and tap **Allow** when it asks for your location.

## Where the plane data comes from
| Source | Why it's here | Limits |
|---|---|---|
| **adsb.fi** (first choice) | Free for personal, non-commercial use. No key. Highest refresh allowance (1 request/sec, no daily cap). | Needs the tiny Cloudflare proxy below (it doesn't send CORS headers, so browsers can't read it directly). |
| adsb.lol | Free, open (ODbL), no key | 500 requests/day per IP without a key (about 4 hours of 30 s refreshes) |
| airplanes.live | Free community feed | Reportedly restricted for non-feeders lately, so it's a fallback only |
| OpenSky Network | Research/non-commercial | 400 requests/day anonymous; no aircraft type or registration |
| adsbdb.com | Aircraft type, owner, photo and **route by callsign** | ~512 requests/min; results are cached on your phone |

**Auto** mode tries them in that order and falls back if one fails. **Settings → Data → Connection check** shows which ones work from your phone.

## Optional but recommended: the 2-minute Cloudflare proxy
1. Cloudflare dashboard → **Workers & Pages → Create → Create Worker** (the "Hello World" one) → **Deploy**.
2. **Edit code**, replace everything with `worker/fleyet-worker.js`, **Deploy**.
3. Copy the `https://….workers.dev` URL into **Fleyet → Settings → Data → Cloudflare proxy URL**.
4. Tap **Connection check**. adsb.fi should show ✓.

No KV, no bindings, no secrets, so no `LEAVING_KV`-style errors. It only forwards requests to an allow-list of flight feeds.

## Using it
- **Radar**: drag to orbit/tilt, pinch to zoom, tap a plane to select it, tap again (or its card) for details.
- **Nearby**: every plane sorted by distance, with filters (Airliners / Heavy / Small / Heli / Military).
- **Detail sheet**: callsign, airline, aircraft type, tail number, route and progress, altitude, speed, heading, climb/descent, squawk, "look this way" direction, 3D turntable.
- **Refresh**: automatic every 30 s (15 / 30 / 60 / Off in Settings), or tap the ring button for a manual refresh.
- **Themes**: 8 themes with their own backgrounds *and* sound styles.
- **Peek elsewhere**: Settings → Location lets you teleport to a big airport for busier skies. **Demo skies** works anywhere, offline.

## Good to know
- iPhone's **silent switch** can mute web audio; the app asks Safari to play through it, but if you hear nothing, check the switch and volume.
- Your coordinates are sent (4 decimals) to the selected flight feed, and through your own proxy if you set one.
- ADS-B isn't complete: military, privacy-blocked and out-of-range aircraft may not show, and callsign routes can be outdated. Not for navigation or safety.
- Rotation lock: the layout stays portrait even if you turn the phone. If it ever looks upside-down sideways, flip **Settings → Data → Flip landscape correction**.
- Top spacing for the Dynamic Island is `--top-pad` near the top of the CSS (currently 16px).
- Credits: adsb.fi, adsb.lol, airplanes.live, OpenSky Network, adsbdb.com.
