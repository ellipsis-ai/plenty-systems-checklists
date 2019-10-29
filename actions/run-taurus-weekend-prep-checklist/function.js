function(channels, airlock, acidJugs, shopvacs, updates, ellipsis) {
  const support = require('support')(ellipsis);

const questionsAndAnswers = {};
ellipsis.meta.current.inputs.filter(eaInput => eaInput.paramType === "Yes/No").forEach(eaInput => {
  const arg = ellipsis.args.filter(ea => ea.name === eaInput.name)[0];
  questionsAndAnswers[eaInput.question] = arg ? arg.value : undefined;
});
const updatesPart = `\n\nUpdates from the week:\n\n${updates}`;
const summary = support.summaryFor("Taurus Weekend Prep", questionsAndAnswers) + updatesPart;
support.postSummaryToAll(summary, channels.split(" "));
}
