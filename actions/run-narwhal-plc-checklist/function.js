function(ph, environment, auto, channels, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {
  "Zones 2 and 3 EC/pH within range": ph,
  "Environment (Temp, RH, CO2) within range on HVAC tab": environment,
  "System running in Auto mode, Supply/Return pumps ON in Auto?": auto
}
support.postFor("Narwhal PLC/Monitor", questionsAndAnswers, channels);
}
