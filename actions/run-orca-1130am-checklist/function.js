function(sumpPumps, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Sump pumps NOT running dry": sumpPumps
}
support.postFor("Orca", questionsAndAnswers, channels);
}
