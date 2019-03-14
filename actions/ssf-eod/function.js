function(channels, ellipsis) {
  const support = require('support')(ellipsis);

const intro = `
:night_with_stars: Hello, this is the SSF EOD Systems Checklist reminder. 

Anyone in this channel can respond. Start by clicking below.
`;
ellipsis.success(intro, {
  choices: [
    {
      label: "Start…",
      actionName: "run-ssf-eod-checklist",
      args: [
        { name: "channels", value: channels }
      ],
      allowOthers: true
    }
  ]
});
}
