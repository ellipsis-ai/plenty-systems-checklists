function(channels, emitters, gutters, growLightsOnAuto, overheadLights, filtersClean, nutrientTankFull, fans, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Gutters draining": gutters,
  "Grow lights on auto (OFF 8am to 11am)": growLightsOnAuto,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights,
  "Filters are clean": filtersClean,
  "Nutrient Tank #2 is full": nutrientTankFull,
  "All fans plugged in and operating": fans
}
support.postFor("MTR", questionsAndAnswers, channels);
}
