// Vercel serverless function — creates a Retell web call token
// Deployed automatically at: /api/create-web-call

const RETELL_API_KEY = "key_91206368c79b85ff4d126285eff6";
const DEMO_AGENT_ID  = "agent_85149522696ff7c256a2af2c67";

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RETELL_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ agent_id: DEMO_AGENT_ID })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: "Retell error", detail: data });
    }

    return res.status(200).json({
      access_token: data.access_token,
      call_id: data.call_id
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
