const axios = require('axios')
const cheerio = require('cheerio');
const { cookie } = require('../../env');

module.exports = detailPage = async (hashedId) => {
  const url = `https://satudata.kemenkopukm.go.id/enumerator/umkm/${hashedId}/review`;

  try {
    const data = await axios.get(url, {
      headers: {
        "Host": "satudata.kemenkopukm.go.id",
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:101.0) Gecko/20100101 Firefox/101.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
      }
    }).then((res) => {
      const htmlPage = res.data
      return cheerio.load(htmlPage);
    })

    return data

  } catch(err) {
    console.log('Error Cookie env set dulu mungkin')
  }
}