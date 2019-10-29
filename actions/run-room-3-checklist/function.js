function(emitters, noWater, growLightsOn, screenFilters, middleRack, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Confirmed there is no water on the floor": noWater,
  "Grow lights on (OFF 10am-4pm)": growLightsOn,
  "Screen filters are clean & free of sediment": screenFilters,
  "Made sure middle light rack is in line": middleRack
}
support.postFor("R & D room 3", questionsAndAnswers, channels);
}
