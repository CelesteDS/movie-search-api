const cheerio = require('cheerio');
const rp = require('request-promise');

const { insertBreaks, toJSON } = require('./searchUtils');

const searchResult = (req, res) => {
  const title = req.params.movieTitle;
  const searchUrl = `http://www.imdb.com/find?ref_=nv_sr_fn&q=${title}&s=all`;

  rp(searchUrl).then((htmlString) => {
    const $ = cheerio.load(htmlString);
    let theText = '';
    $('.findList').each((i, elem) => {
      if ($('h3', $(elem).parent()).text() === 'Titles') {
        theText += $('.result_text', elem).text();
        return false;
      }
      return true;
    });
    $('.result_text').children('small').each((ind, elem) => {
      theText = theText.replace($(elem).text(), '');
    });
    res.send(toJSON(insertBreaks(theText).trim()));
  });
}

module.exports = searchResult;
