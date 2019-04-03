function(channels, ellipsis) {
  const moment = require("moment-timezone");
const support = require('support')(ellipsis);
const now = moment.tz(ellipsis.team.timeZone);
const dayOfWeek = now.isoWeekday(); // Monday 1-7 Sunday
const hourOfDay = now.hour(); // 0-23
const isTuesdayOrThursday = dayOfWeek === 2 || dayOfWeek === 4;
const isPM = hourOfDay >= 12;
const isTuesdayOrThursdayPM = isTuesdayOrThursday && isPM;
const intro = support.introFor(":female-scientist:", "R & D");
const choices = [
  support.choiceFor("Room 1", channels),
  support.choiceFor("Room 2", channels),
  support.choiceFor("Room 3", channels)
];
if (isTuesdayOrThursdayPM) {
  choices.push(support.choiceFor("Tuesday/Thursday PM", channels));
}
ellipsis.success(intro, {
  choices: choices
});
}
