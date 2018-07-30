function(channels, ellipsis) {
  const support = require('support')(ellipsis);

const intro = support.introFor(":truck:", "Production");
ellipsis.success(intro, {
  choices: ["Megalodon", "MTR"].map(r => support.choiceFor(r, channels))
});
}
