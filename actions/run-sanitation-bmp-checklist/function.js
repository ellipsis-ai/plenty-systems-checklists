function(channels, checkedCoveralls, trashEmpty, glovesBootsHairnets, soapDispenser, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Check BMP Tigris & Taurus for coveralls": checkedCoveralls,
  "Trash empty": trashEmpty,
  "Gloves, boots, hairnets more than halfway full": glovesBootsHairnets,
  "Soap dispenser and paper towels more than 25% full": soapDispenser
}
support.postFor("Sanitation BMP", questionsAndAnswers, channels);
}
