function(channels, emitters, gutters, growLightsOnAuto, overheadLights, filtersClean, nutrientTankFull, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Gutters draining": gutters,
  "Grow lights on auto (OFF 5am to 8am)": growLightsOnAuto,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights,
  "Filters are clean": filtersClean,
  "Nutrient Tank #1 is full": nutrientTankFull
}
support.postFor("Megalodon", questionsAndAnswers, channels);
}
