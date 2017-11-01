const cheerio = require('cheerio');
const rp = require('request-promise');

const { insertBreaks, toJSON } = require('./searchUtils');

const searchResult = (req, res) => {
  const title = req.params.movieTitle;
  const searchUrl = `http://www.imdb.com/find?ref_=nv_sr_fn&q=${title}&s=all`;

  rp(searchUrl).then((htmlString) => {
    const $ = cheerio.load(htmlString);
    let resultText = '';
    $('.findList').each((i, elem) => {
      if ($('h3', $(elem).parent()).text() === 'Titles') {
        resultText += $('.result_text', elem).text();
        return false;
      }
      return true;
    });
    $('.result_text').children('small').each((ind, elem) => {
      resultText = resultText.replace($(elem).text(), '');
    });
    res.set('Content-Type', 'application/json');
    res.send(toJSON(insertBreaks(resultText)));
  });
};

module.exports = searchResult;
