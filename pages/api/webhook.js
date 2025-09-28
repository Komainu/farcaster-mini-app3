export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body || {};

    // Farcaster に返すレスポンス（frame action）
    const response = {
      type: "frame",
      version: "1",
      title: "Hello Farcaster!",
      image: "https://your-vercel-url.vercel.app/hero.png",
      buttons: [
        {
          title: "OK 👍",
          action: {
            type: "post_redirect",
            url: "https://your-vercel-url.vercel.app"
          }
        }
      ]
    };

    res.status(200).json(response);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
