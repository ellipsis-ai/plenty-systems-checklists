function(channels, ellipsis) {
  const intro = `
:tractor: Hello, this is the 582 Warehouse Checklist reminder. 

Anyone in this channel can respond. Click below to start.
`;
ellipsis.success(intro, {
  choices: [
    { 
      label: "Start", 
      actionName: "run-582-warehouse-checklist", 
      args: [ { name: "channels", value: channels } ]
    }
  ]
});
}
