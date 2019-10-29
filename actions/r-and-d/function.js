function(channels, ellipsis) {
  const moment = require("moment-timezone");
const support = require('support')(ellipsis);
const now = moment.tz(ellipsis.team.timeZone);
const dayOfWeek = now.isoWeekday(); // Monday 1-7 Sunday
const hourOfDay = now.hour(); // 0-23
const isTuesdayToSaturday = dayOfWeek >= 2 && dayOfWeek <= 6;
const isAM = hourOfDay < 12;
const isTuesdayToSaturdayAM = isTuesdayToSaturday && isAM;
const intro = support.introFor(":female-scientist:", "R & D");
const choices = [
  support.choiceFor("Room 1", channels),
  support.choiceFor("Room 2", channels),
  support.choiceFor("Room 3", channels)
];
if (isTuesdayToSaturdayAM) {
  choices.push(support.choiceFor("PM (1x/wk)", channels));
}
ellipsis.success(intro, {
  choices: choices
});
}
