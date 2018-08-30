function(emitters, gutters, growLightsOnAuto, overheadLights, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Gutters draining": gutters,
  "Grow lights on auto (OFF 4am to 10am)": growLightsOnAuto,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights
}
support.postFor("Megalodon", questionsAndAnswers, channels);
}
