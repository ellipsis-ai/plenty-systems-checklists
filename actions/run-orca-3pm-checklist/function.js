function(trolleysRemoved, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Trolleys removed from germ chambers": trolleysRemoved
}
support.postFor("Orca", questionsAndAnswers, channels);
}
