function(trolleysPushed, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Trolleys pushed into germ chamber": trolleysPushed
}
support.postFor("Orca", questionsAndAnswers, channels);
}
