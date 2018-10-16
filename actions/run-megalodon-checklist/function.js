function(emitters, gutters, growLightsOnAuto, overheadLights, checkedSockFilter, nutrientTankFull, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Gutters draining": gutters,
  "Grow lights on auto (OFF 4am to 10am)": growLightsOnAuto,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights,
  "Checked sock filter and replaced if necessary": checkedSockFilter,
  "Nutrient Tank #1 is full": nutrientTankFull
}
support.postFor("Megalodon", questionsAndAnswers, channels);
}
