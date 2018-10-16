function(trash, netsuite, packagePickupRacks, swept, pallets, livingMap, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "All trash removed from warehouse": trash,
  "Netsuite upload completed for day": netsuite,
  "Package pick-up racks cleared and owners alerted": packagePickupRacks,
  "Dumpster area swept": swept,
  "Unused wooden pallets removed from warehouse": pallets,
  "Living map is up to date": livingMap
}
support.postFor("582 Warehouse", questionsAndAnswers, channels);
}
