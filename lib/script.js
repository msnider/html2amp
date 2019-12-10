const script = ($) => {
  $('script:not([type="application/ld+json"]):not([src^="https://cdn.ampproject.org"]):not([type="application/json"])').remove()
  return $
}

module.exports = script
