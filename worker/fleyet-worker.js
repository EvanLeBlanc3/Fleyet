// Fleyet CORS proxy for Cloudflare Workers.
// Why: some free ADS-B feeds (notably adsb.fi) don't send CORS headers, so a browser app
// can't read them directly. This tiny Worker fetches the feed for you and adds the headers.
// No KV, no secrets, no bindings needed. Paste, Deploy, done.

// OPTIONAL: lock it to your GitHub Pages site, e.g. 'https://yourname.github.io'
const ONLY_FROM_ORIGIN = '';

const ALLOWED_HOSTS = [
  'opendata.adsb.fi',
  'api.adsb.lol',
  'api.airplanes.live',
  'opensky-network.org',
  'api.adsbdb.com',
];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Max-Age': '86400',
};

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });

    if (ONLY_FROM_ORIGIN) {
      const o = request.headers.get('Origin');
      if (o && o !== ONLY_FROM_ORIGIN) return new Response('forbidden origin', { status: 403, headers: CORS });
    }

    const target = new URL(request.url).searchParams.get('u');
    if (!target) return new Response('Fleyet proxy is alive. Usage: /?u=<encoded https url>', { headers: CORS });

    let t;
    try { t = new URL(target); } catch { return new Response('bad url', { status: 400, headers: CORS }); }
    if (t.protocol !== 'https:' || !ALLOWED_HOSTS.includes(t.hostname)) {
      return new Response('host not allowed', { status: 403, headers: CORS });
    }

    try {
      const up = await fetch(t.toString(), {
        headers: { 'User-Agent': 'Fleyet-personal-app/1.0', 'Accept': 'application/json' },
      });
      const out = new Response(up.body, { status: up.status, statusText: up.statusText });
      out.headers.set('Content-Type', up.headers.get('Content-Type') || 'application/json');
      out.headers.set('Cache-Control', 'no-store');
      for (const [k, v] of Object.entries(CORS)) out.headers.set(k, v);
      return out;
    } catch (err) {
      return new Response('upstream error: ' + err.message, { status: 502, headers: CORS });
    }
  },
};
