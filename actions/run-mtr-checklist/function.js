function(channels, emitters, gutters, growLightsOnAuto, overheadLights, filtersClean, nutrientTankFull, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Gutters draining": gutters,
  "Grow lights on auto (off 7am to 10am)": growLightsOnAuto,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights,
  "Filters are clean": filtersClean,
  "Nutrient Tank #2 is full": nutrientTankFull
}
support.postFor("MTR", questionsAndAnswers, channels);
}
