const script = ($) => {
  $('script:not([type="application/ld+json"]):not([src^="https://cdn.ampproject.org"])').remove()
  return $
}

module.exports = script
