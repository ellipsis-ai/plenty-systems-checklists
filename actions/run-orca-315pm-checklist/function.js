function(tankFull, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Tank is full": tankFull
}
support.postFor("Orca", questionsAndAnswers, channels);
}
