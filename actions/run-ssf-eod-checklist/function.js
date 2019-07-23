function(channels, pumps, emitters, valves, feedTanks, noPuddles, overheadLightsOff, growLights, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {};
ellipsis.args.filter((ea) => ea.input.paramType === "Yes/No").forEach((ea) => {
  questionsAndAnswers[ea.input.question] = ea.value
});
support.postFor("SSF EOD", questionsAndAnswers, channels);
}
