# Eleventy Plugin - Lodash

Every [lodash](https://lodash.com/) method as a filter. 

Install:

```
npm install @jamshop/eleventy-plugin-lodash
```

## Usage

In you main config `.eleventy.js`: 
```
const pluginLodash = require("@jamshop/eleventy-plugin-lodash");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginLodash);
  // and the rest of your config
};
```

Lodash is a javascript utility library and this plugin exposes those methods as filters in 11ty.

This is really just a thin wrapper around lodash, but it should provide all the filtering and transfomation utilities you could ever need in 11ty with an API many people are familiar with.

It works with the following collections:

 - `array`
 - `collection`
 - `date`
 - `function`
 - `lang`
 - `math`
 - `number`
 - `object`
 - `string`
 - `util`

The first argument of each lodash function is usually the subject to transform. For example, method `_.fill()` accepts an array followed by a value:

```
_.fill(array, 'a');
```

With this plugin, the equivlent 11ty filter will be named `_fill` and in most template languages supporting filter (except handlebars) the first argument is moved to the left of the pipe. E.g. `{{ array | _fill: 'hello world' }}`.

Below are some examples of how to iterate over results with filters.

## Examples using `_.chunk`:

### Nunjucks
```
---
layout: "page.njk"
testData: ["a","b","c","d"]
---

{% for chunk in (testData | _chunk(2)) %}
  chunk: {{ chunk }} <br>
{% endfor %}
```

### Liquid (markdown/html)
```
---
layout: "page.njk"
testData: ["a","b","c","d"]
permalink: "/md.html"
---
{% assign chunks = (testData | _chunk: 2) %}
{% for chunk in chunks %}
  chunk: {{ chunk }} <br>
{% endfor %}
```

### Handlebars
```
---
layout: "page.njk"
testData: ["a","b","c","d"]
permalink: "/hbs.html"
---
{{#each (_chunk testData 2) }}
  chunk: {{this}}<br>
{{/each}}
```
Note: There may be some lodash methods that make little sense as a filter. There may even be that some don't even work with all template languages especially where you need to provide functions as an argument. Desipte this the vast majority of methods should work. 

See the Lodash docs for all methods: https://lodash.com/docs/4.17.15