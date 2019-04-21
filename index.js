const cheerio = require('cheerio')
const amp = require('./lib/amp')
const css = require('./lib/css')
const img = require('./lib/img')
const picture = require('./lib/picture')
const script = require('./lib/script')
const charset = require('./lib/meta/charset')
const viewport = require('./lib/meta/viewport')
const ga = require('./lib/googleanalytics')
const iframe = require('./lib/iframe')
const boilerplate = require('./lib/boilerplate')
const serviceworker = require('./lib/serviceWorker')
const link = require('./lib/link')

const html2amp = async (html, options = {}) => {
  let $ = cheerio.load(html)
  $ = amp($, options)
  $ = await css($, options)
  $ = await picture($, options) // should be done before img
  $ = await img($, options)
  $ = script($, options)
  $ = charset($, options)
  $ = viewport($, options)
  $ = ga($, options)
  $ = iframe($, options)
  $ = link($)
  $ = serviceworker($, options)
  $ = boilerplate($, options)
  return $.html()
}

module.exports = html2amp
