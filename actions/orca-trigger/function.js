function(actionName, ellipsis) {
  const support = require('support')(ellipsis);

const intro = `
:orca: Hello, this is an Orca Systems Checklist reminder. 

Anyone in this channel can respond. Start by clicking below.
`;
const channelId = ellipsis.event.message ? (ellipsis.event.message.channel ? ellipsis.event.message.channel.id : "") : ""
ellipsis.success(intro, {
  choices: [
    {
      label: "Start…",
      actionName: actionName,
      args: [
        { name: "channels", value: channelId }
      ],
      allowOthers: true
    }
  ]
});
}
