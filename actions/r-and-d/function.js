function(channels, ellipsis) {
  const support = require('support')(ellipsis);

const intro = support.introFor(":female-scientist:", "R & D");
ellipsis.success(intro, {
  choices: [1, 2, 3].map(n => `Room ${n}`).map(r => support.choiceFor(r, channels))
});
}
