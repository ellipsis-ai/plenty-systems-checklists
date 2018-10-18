/*
@exportId iOJySXn-TeGmEbV8zqHvjg
*/
module.exports = (function() {
return (ellipsis, trash, netsuite, packagePickupRacks, swept, pallets, otherArgs, channels) => {
  const support = require('support')(ellipsis);
  const questionsAndAnswers = Object.assign({}, {
    "All trash removed from warehouse": trash,
    "Netsuite upload completed for day": netsuite,
    "Package pick-up racks cleared and owners alerted": packagePickupRacks,
    "Dumpster area swept": swept,
    "Unused wooden pallets removed from warehouse": pallets,
  }, otherArgs);
  support.postFor("582 Warehouse", questionsAndAnswers, channels);
};
})()
     