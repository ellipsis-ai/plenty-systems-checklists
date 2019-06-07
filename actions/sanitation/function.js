function(ellipsis) {
  const support = require('support')(ellipsis);

const intro = support.introFor(":bee:", "BMP");
const rooms = [
  "BMP"
];
const channel = (ellipsis.event.message && ellipsis.event.message.channel) ? ellipsis.event.message.channel.id : undefined;
ellipsis.success(intro, {
  choices: rooms.map(r => support.choiceFor(r, channel, "sanitation"))
});
}
