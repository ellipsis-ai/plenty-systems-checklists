function(channels, lightsOn, towerFunnels, transportedTowers, noWiltedTowers, noLeaks, floor, roomCurtainClosed, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Lights ON from 7am to 1pm, OFF at all other times": lightsOn,
  "Tower funnels aligned under emitters": towerFunnels,
  "Checked under ALL newly transplanted towers and made sure emitters are aligned in middle of funnel": transportedTowers,
  "No wilted towers": noWiltedTowers,
  "No leaks or pooling water": noLeaks,
  "Floor clean": floor,
  "Room curtain closed": roomCurtainClosed
}
support.postFor("Narwhal Grow Room", questionsAndAnswers, channels);
}
