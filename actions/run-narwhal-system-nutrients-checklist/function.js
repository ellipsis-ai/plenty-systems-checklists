function(channels, waterLevelHighEnough, waterLevelNotTooHigh, buckets, noWaterLeaks, allFiltersClean, zone1O2Tank, ph, environment, auto, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Zone 1, 2, and 3 supply tank water levels at or above 300mm": waterLevelHighEnough,
  "Zone 1, 2, and 3 supply tank water levels not excessively high": waterLevelNotTooHigh,
  "pH down buckets are at least 1/2 full": buckets,
  "No leaks/water around tanks/filtration/sensor manifold": noWaterLeaks,
  "All filters are clean": allFiltersClean,
  "Zone 1 O2 tank is full": zone1O2Tank,
  "Zones 2 and 3 EC/pH within range": ph,
  "Environment (Temp, RH, CO2) within range on HVAC tab": environment,
  "System running in Auto mode, Supply/Return pumps ON in Auto?": auto
}
support.postFor("System/Nutrients", questionsAndAnswers, channels);
}
