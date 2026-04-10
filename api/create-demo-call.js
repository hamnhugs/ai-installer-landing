// Vercel serverless function — creates a Retell web call and returns the access token
// This runs on Vercel's servers so the API key is never exposed to the browser.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const response = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: 'agent_bff375a1d1a0db72f26d49752e',
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Retell API error:', err);
      return res.status(response.status).json({ error: 'Failed to create call', detail: err });
    }

    const data = await response.json();
    return res.status(200).json({ access_token: data.access_token, call_id: data.call_id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
