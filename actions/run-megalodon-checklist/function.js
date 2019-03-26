function(emitters, gutters, growLightsOnAuto, overheadLights, checkedBucketFilter, checkedBasket, nutrientTankFull, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Gutters draining": gutters,
  "Grow lights on auto (OFF 6am to 10am)": growLightsOnAuto,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights,
  "Checked bucket filter and replaced if necessary": checkedBucketFilter,
  "Checked basket and screen filters and replaced if necessary": checkedBasket,
  "Nutrient Tank #1 is full": nutrientTankFull
}
support.postFor("Megalodon", questionsAndAnswers, channels);
}
