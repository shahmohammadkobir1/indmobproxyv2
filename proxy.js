const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

module.exports = async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('Missing ?url parameter');

  const proxyUrl = 'http://rgdf0kfh6g-mobile.res-country-IN-state-1264418-city-1275339-asn-55836.4755.24560.63949-hold-query:KRsfBHqGvvhEZKJP@185.132.133.7:9999';
  const agent = new HttpsProxyAgent(proxyUrl);

  try {
    const response = await fetch(targetUrl, {
      agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10)',
        'Referer': 'http://amit-1.allinonereborn.in/',
        'Accept': '*/*',
        'Connection': 'keep-alive'
      },
      redirect: 'follow'
    });

    const contentType = response.headers.get('content-type');
    if (contentType) res.setHeader('content-type', contentType);
    response.body.pipe(res);

  } catch (err) {
    console.error(err);
    res.status(500).send('Proxy error');
  }
};
