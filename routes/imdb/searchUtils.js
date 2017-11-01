/**
* Inserts line breaks between each film in the string and removes any alternate titles
* @param {string} movieTitlesString
* @returns {string}
*/

const insertBreaks = (movieTitlesString) => {
  const betweenEach = /\)\s+([^(\s])/g;
  const removeAkas = /aka ".+"\s*/g;
  return movieTitlesString.replace(betweenEach, ')\n$1').replace(removeAkas, '');
};


/**
 * Converts movie result text to JSON
 * @param  {string} text - the results from imdb, with title & movie year
 * @return {object} - the results in JSON form
 */
const toJSON = (text) => {
  if (typeof text !== 'string') throw new TypeError(`Expected a string. Got a ${typeof text}`);
  const movieYearPattern = /(.*)\s+\((\d\d\d\d)\)\s*/g;
  const movies = [];
  let execArray;
  while ((execArray = movieYearPattern.exec(text)) !== null) {
    movies.push({ name: execArray[1], year: execArray[2] });
  }
  return JSON.stringify({ movies });
};

module.exports = { insertBreaks, toJSON };
