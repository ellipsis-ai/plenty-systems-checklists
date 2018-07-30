/*
@exportId 8PnB_UkIRe2_YR6h109a9A
*/
module.exports = (function() {
const EllipsisApi = require('ellipsis-api');

return ellipsis => {
  const api = new EllipsisApi(ellipsis);
  const user = ellipsis.userInfo.messageInfo.userId;
  
  return {
    postFor: postFor,
    choiceFor: choiceFor,
    introFor: introFor
  };
  
  function introFor(emoji, checklistName) {
    return `
${emoji} Hello, this is the ${checklistName} Systems Checklist reminder. 

Anyone in this channel can respond. Start by selecting a room below.
`;
  }
  
  function choiceFor(roomName, channels) {
    const roomPart = roomName.replace(/\s/, "-").toLowerCase();
    return {
      label: roomName,
      actionName: `run-${roomPart}-checklist`,
      args: [
        { name: "channels", value: channels }
      ],
      allowOthers: true,
      allowMultipleSelections: true
    };
  }
  
  function postFor(checklistName, questionsAndAnswers, channelsString) {
    const channels = channelsString.split(" ");
    const summary = summaryFor(checklistName, questionsAndAnswers);
    return postSummaryToAll(summary, channels);
  }
  
  function summaryFor(checklistName, questionsAndAnswers) {
    return `
${checklistName} systems checklist has been completed by <@${user}>:
${summaryPartsFor(questionsAndAnswers)}
`;
  }
  
  function summaryPartsFor(questionsAndAnswers) {
    return Object.keys(questionsAndAnswers).map(question => {
      return summaryPartFor(question, questionsAndAnswers[question]);
    }).join("\n");
  }
  
  function summaryPartFor(question, answer) {
    return `${checkFor(answer)}   ${question}`;
  }
  
  function postSummaryToAll(summary, channels) {
    return api.say({ message: "Got it. Thanks!" }).then(res => {
      Promise.all(channels.map(ch => {
        return postSummary(summary, ch);
      })).then(ellipsis.noResponse);                                 
    });
  }
  
  function postSummary(summary, channel) {
    return api.run({
      actionName: "post-checklist-summary",
      args: [{ name: "summary", value: summary }],
      channel: channel
    });
  }

  function checkFor(bool) {
    return bool? ":white_check_mark:" : ":x:";
  }
  
};
})()
     