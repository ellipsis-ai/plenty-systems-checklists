function(trash, netsuite, packagePickupRacks, swept, pallets, channels, ellipsis) {
  const postFor = require('warehouse-q-and-a');
const otherArgs = {};
postFor(ellipsis, trash, netsuite, packagePickupRacks, swept, pallets, otherArgs, channels);
}
