function(channels, lightsOn, noWiltedTowers, noLeaks, towerFunnels, floor, trash, roomCurtainClosed, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Lights ON from 4pm to 10 am, OFF at all other times": lightsOn,
  "No wilted towers": noWiltedTowers,
  "No leaks or pooling water": noLeaks,
  "Tower funnels aligned under emitters": towerFunnels,
  "Floor clean": floor,
  "Trash removed": trash,
  "Room curtain closed": roomCurtainClosed
}
support.postFor("Narwhal Grow Room", questionsAndAnswers, channels);
}
