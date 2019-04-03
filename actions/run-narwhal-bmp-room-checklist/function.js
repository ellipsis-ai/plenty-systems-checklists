function(trash, sink, stocked, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Trash removed": trash,
  "Handwash sink reservoir full": sink,
  "Soap, booties, paper towels stocked": stocked
}
support.postFor("Narwhal BMP Room", questionsAndAnswers, channels);
}
