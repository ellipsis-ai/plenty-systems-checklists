function(discScreenFilters, fillBlueH20Tubs, wipeAlgaeOffEmitters, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Disc and screen filters": discScreenFilters,
  "Fill blue H₂0 tubs": fillBlueH20Tubs,
  "Wipe algae off emitters": wipeAlgaeOffEmitters
}
support.postFor("R & D Tuesday/Thursday PM", questionsAndAnswers, channels);
}
