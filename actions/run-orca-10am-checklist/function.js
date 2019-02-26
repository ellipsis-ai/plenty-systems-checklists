function(irrigationStarted, correctBays, tablesDraining, noLowSpots, drainPans, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Irrigation started": irrigationStarted,
  "Correct bays being irrigated": correctBays,
  "Tables draining and clear of debris": tablesDraining,
  "No low spots or standing water in tables": noLowSpots,
  "Drain pans secured and aligned": drainPans
}
support.postFor("Orca", questionsAndAnswers, channels);
}
