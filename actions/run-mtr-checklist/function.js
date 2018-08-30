function(emitters, quickConnects, gutters, growLightsOnAuto, sandFilterLevel, overheadLights, checkedSockFilter, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Emitters flowing": emitters,
  "Quick connects connected": quickConnects,
  "Gutters draining": gutters,
  "Grow lights on auto (off 6am to 12pm)": growLightsOnAuto,
  "Sand filter < 20 PSI (back-flush if above 20 PSI)": sandFilterLevel,
  "Overhead room lights only on during production activities (M,W,F)": overheadLights,
  "Checked sock filter and replaced if necessary": checkedSockFilter
}
support.postFor("MTR", questionsAndAnswers, channels);
}
