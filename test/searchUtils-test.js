const expect = require('chai').expect;

const { insertBreaks, toJSON } = require('../routes/imdb/searchUtils');
const { movieStringExample, movieStringOutputExample } = require('./lib/stringExamples');

describe('toJSON()', () => {
  it('should return valid JSON, given a string', () => {
    // JSON.parse throws a SyntaxError if not given valid JSON
    expect(() => JSON.parse(toJSON('string'))).to.not.throw(SyntaxError);
  });
  it('should throw an error if param is not a string', () => {
    expect(() => JSON.parse(toJSON())).to.throw();
  });
});

describe('insertBreaks()', () => {
  it('should format movies as expected', () => {
    expect(insertBreaks(movieStringExample)).to.eql(movieStringOutputExample);
  });
});
