function(emitters, gutters, growLightsOnAuto, overheadLights, checkedSockFilter, checkedBasket, nutrientTankFull, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Gutters draining": gutters,
  "Grow lights on auto (off 6am to 12pm)": growLightsOnAuto,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights,
  "Checked sock filter and replaced if necessary": checkedSockFilter,
  "Checked basket and screen filters and replaced if necessary": checkedBasket,
  "Nutrient Tank #2 is full": nutrientTankFull
}
support.postFor("MTR", questionsAndAnswers, channels);
}
