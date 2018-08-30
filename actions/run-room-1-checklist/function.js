function(emitters, quickConnects, growLightsOn, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Quick connects connected": quickConnects,
  "Grow lights on (12PM to 6AM)": growLightsOn
}
support.postFor("R & D room 1", questionsAndAnswers, channels);
}
