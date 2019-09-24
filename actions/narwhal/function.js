function(ellipsis) {
  const support = require('support')(ellipsis);
const moment = require('moment-timezone');

const tz = ellipsis.team.timeZone;
const noonToday = moment().tz(tz).set({ hour: 12, minute: 0, second: 0, millisecond: 0 });
const isMorning = moment().tz(tz).isBefore(noonToday);

const intro = support.introFor(":unicorn_face:", "Narwhal");
const growRoomLabel = "Grow Room";
const roomPrefix = "narwhal";
const channel = (ellipsis.event.message && ellipsis.event.message.channel) ? ellipsis.event.message.channel.id : undefined;
ellipsis.success(intro, {
  choices: [
    isMorning ? 
      support.choiceFor(growRoomLabel + " " + "Morning", channel, roomPrefix, growRoomLabel) :
      support.choiceFor(growRoomLabel, channel, roomPrefix),
    support.choiceFor("System/Nutrients", channel, roomPrefix)
  ]
});
}
