function(traceability, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Traceability": traceability
}
support.postFor("Orca", questionsAndAnswers, channels);
}
