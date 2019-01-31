function(irrigationOff, doOff, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Irrigation off": irrigationOff,
  "DO off": doOff
}
support.postFor("Orca", questionsAndAnswers, channels);
}
