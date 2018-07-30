function(emitters, quickConnects, gutters, growLightsOnAuto, ecLevel, overheadLights, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Quick connects connected": quickConnects,
  "Gutters draining": gutters,
  "Grow lights on auto": growLightsOnAuto,
  "EC level on Anderson meter < 2.25": ecLevel,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights
}
support.postFor("MTR", questionsAndAnswers, channels);
}
