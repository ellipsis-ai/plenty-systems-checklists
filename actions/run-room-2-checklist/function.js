function(feedTanks, chillers, pressureGauges, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Both black feed tanks at least 1/2 full": feedTanks,
  "Both chillers running between 65-90 degrees F": chillers,
  "All pressure gauges on feed lines > 20psi": pressureGauges
}
support.postFor("R & D room 2", questionsAndAnswers, channels);
}
