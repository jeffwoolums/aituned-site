// Catch-all for /listen/* — serve the player page
export async function onRequest(context) {
  const url = new URL(context.request.url);
  url.pathname = '/player.html';
  
  // Fetch the static asset from the Pages deployment
  const asset = await context.env.ASSETS.fetch(url.toString());
  
  // Clone and return with 200 status
  const html = await asset.text();
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
