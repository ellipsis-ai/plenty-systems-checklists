function(emitters, noWater, growLights, screenFilters, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Confirmed there is no water on the floor": noWater,
  "Grow lights functioning properly (OFF 6AM-12PM)": growLights,
  "Screen filters are clean & free of sediment": screenFilters
}
support.postFor("R & D room 1", questionsAndAnswers, channels);
}
