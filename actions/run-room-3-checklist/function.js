function(emitters, noWater, growLightsOn, sockFilters, middleRack, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Confirmed there is no water on the floor": noWater,
  "Grow lights on (OFF 10am-4pm)": growLightsOn,
  "Confirmed sock filters are draining properly and not ballooning": sockFilters,
  "Made sure middle light rack is in line": middleRack
}
support.postFor("R & D room 3", questionsAndAnswers, channels);
}
