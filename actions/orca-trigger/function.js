function(actionName, channels, ellipsis) {
  const support = require('support')(ellipsis);

const intro = `
:orca: Hello, this is an Orca Systems Checklist reminder. 

Anyone in this channel can respond. Start by clicking below.
`;
ellipsis.success(intro, {
  choices: [
    {
      label: "Start…",
      actionName: actionName,
      args: [
        { name: "channels", value: channels }
      ],
      allowOthers: true
    }
  ]
});
}
