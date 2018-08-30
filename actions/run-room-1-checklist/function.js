function(emitters, quickConnects, growLightsOn, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Quick connects connected": quickConnects,
  "Grow lights on (off 6AM to 12PM)": growLightsOn
}
support.postFor("R & D room 1", questionsAndAnswers, channels);
}
