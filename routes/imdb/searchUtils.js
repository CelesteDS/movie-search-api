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
  const re = /(.*)\s+\((\d\d\d\d)\)\s*/g;
  let JsonString ='{ "movies":[';
  let execArray;
  while((execArray = re.exec(text)) !== null){
    JsonString += `{"name": "${execArray[1]}", "year": "${execArray[2]}"},`;
  }
  JsonString = `${JsonString.slice(0, -1)} ]}` // remove that trailing comma or its not valid JSON
  return JSON.parse(JsonString);

}

module.exports = { insertBreaks, toJSON };
