function(ellipsis) {
  const support = require('support')(ellipsis);

const intro = `
:burrito: Hello, this is the Nutrient Room Checklist reminder. 

Anyone in this channel can respond. Start by clicking below.
`;
const channelId = ellipsis.event.message ? (ellipsis.event.message.channel ? ellipsis.event.message.channel.id : "") : ""
ellipsis.success(intro, {
  choices: [
    {
      label: "Start…",
      actionName: "run-nutrient-room-checklist",
      args: [
        { name: "channels", value: channelId }
      ],
      allowOthers: true
    }
  ]
});
}
