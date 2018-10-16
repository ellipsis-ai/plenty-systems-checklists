function(emitters, noWater, growLightsOn, sockFilters, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Confirmed there is no water on the floor": noWater,
  "Grow lights on (OFF 10am-4pm)": growLightsOn,
  "Confirmed sock filters are draining properly and not ballooning": sockFilters
}
support.postFor("R & D room 3", questionsAndAnswers, channels);
}
