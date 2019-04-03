function(feedTanks, chillers, pressureGauges, phInRange, ecInRange, oxygenTankFull, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Both black feed tanks at least 1/2 full": feedTanks,
  "Both chillers running between 65-90 degrees F": chillers,
  "All pressure gauges on feed lines > 20psi": pressureGauges,
  "pH in range 5.8-6.0": phInRange,
  "EC in range 1.6-2.0": ecInRange,
  "Oxygen tank full": oxygenTankFull
}
support.postFor("R & D room 2", questionsAndAnswers, channels);
}
