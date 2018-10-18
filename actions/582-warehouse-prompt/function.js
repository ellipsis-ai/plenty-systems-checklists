function(friday, channels, ellipsis) {
  const intro = `
:tractor: Hello, this is the 582 Warehouse Checklist reminder. 

Anyone in this channel can respond. Click below to start.
`;
const actionName = friday ? "run-582-warehouse-fri-checklist" : "run-582-warehouse-checklist";
ellipsis.success(intro, {
  choices: [
    { 
      label: "Start", 
      actionName: actionName, 
      args: [ { name: "channels", value: channels } ],
      allowOthers: true,
      allowMultipleSelections: true
    }
  ]
});
}
