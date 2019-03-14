function(pumps, emitters, valves, feedTanks, noPuddles, growLights, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Pumps on in both MTR and MEG rooms": pumps,
  "Emitters flowing": emitters,
  "Valves in line with green arrows": valves,
  "Nutrient feed tanks filled at least half way, and pumps on": feedTanks,
  "No puddles on the floor": noPuddles,
  "Grow lights on": growLights
}
support.postFor("SSF EOD", questionsAndAnswers, channels);
}
