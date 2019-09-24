function(channels, lightsOn, towerFunnels, noWiltedTowers, noLeaks, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Lights ON from 7am to 1pm, OFF at all other times": lightsOn,
  "Tower funnels aligned under emitters": towerFunnels,
  "No wilted towers": noWiltedTowers,
  "No leaks or pooling water": noLeaks
}
support.postFor("Narwhal Grow Room", questionsAndAnswers, channels);
}
