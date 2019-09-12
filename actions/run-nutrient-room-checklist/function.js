function(zoneTanksHalfFull, zoneTanksInRange, zoneTankPumpsOn, roTankPumpOn, concentrateTanksFullEnough, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {};
ellipsis.meta.current.inputs.forEach(eaInput => {
  if (eaInput.name !== "channels") {
    const arg = ellipsis.args.filter(ea => ea.name === eaInput.name)[0];
    questionsAndAnswers[eaInput.question] = arg ? arg.value : undefined;
  }
});
support.postFor("Nutrient Room", questionsAndAnswers, channels);
}
