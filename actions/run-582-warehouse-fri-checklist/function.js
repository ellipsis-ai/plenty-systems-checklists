function(trash, netsuite, packagePickupRacks, swept, pallets, livingMap, channels, ellipsis) {
  const postFor = require('warehouse-q-and-a');
const otherArgs = {
  "Living map is up to date": livingMap
};
postFor(ellipsis, trash, netsuite, packagePickupRacks, swept, pallets, otherArgs, channels);
}
