function(emitters, noWater, growLights, sockFilters, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Confirmed there is no water on the floor": noWater,
  "Grow lights functioning properly (OFF 6AM-12PM)": growLights,
  "Sock filters are draining properly and not ballooning": sockFilters
}
support.postFor("R & D room 1", questionsAndAnswers, channels);
}
