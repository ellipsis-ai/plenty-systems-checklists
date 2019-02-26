function(doOn, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "DO is on": doOn
}
support.postFor("Orca", questionsAndAnswers, channels);
}
