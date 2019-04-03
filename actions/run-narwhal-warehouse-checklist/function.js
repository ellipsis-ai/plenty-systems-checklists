function(waterLevelHighEnough, waterLevelNotTooHigh, buckets, noWaterLeaks, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Zone 1, 2, and 3 supply tank water levels at or above 300mm": waterLevelHighEnough,
  "Zone 1, 2, and 3 supply tank water levels not excessively high": waterLevelNotTooHigh,
  "pH down buckets are at least 1/2 full": buckets,
  "No leaks/water around tanks/filtration/sensor manifold": noWaterLeaks
}
support.postFor("Narwhal warehouse", questionsAndAnswers, channels);
}
