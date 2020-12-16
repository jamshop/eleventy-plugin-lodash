const array = require('lodash/array');
const collection = require('lodash/collection');
const date = require('lodash/date');
const func = require('lodash/function');
const lang = require('lodash/lang');
const math = require('lodash/math');
const number = require('lodash/number');
const object = require('lodash/object');
const string = require('lodash/string');
const util = require('lodash/util');

module.exports = (eleventyConfig) => {
  Object.keys(array).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, array[key]);
  });

  Object.keys(object).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, object[key]);
  });

  Object.keys(collection).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, collection[key]);
  });

  Object.keys(date).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, Date[key]);
  });

  Object.keys(collection).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, collection[key]);
  });

  Object.keys(func).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, func[key]);
  });

  Object.keys(lang).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, lang[key]);
  });
  
  Object.keys(math).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, math[key]);
  });

  Object.keys(string).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, string[key]);
  });

  Object.keys(number).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, number[key]);
  });

  Object.keys(util).forEach(key => {
    eleventyConfig.addFilter(`_${key}`, util[key]);
  });


};


