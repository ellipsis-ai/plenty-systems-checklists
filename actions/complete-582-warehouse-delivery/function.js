function(ellipsis) {
  const ChecklistToSheet = require('checklist-to-sheet');
ChecklistToSheet.save(ellipsis, ellipsis.env.SYSTEMS_CHECKLISTS_SPREADSHEET_ID, "582 Warehouse Delivery", {
  "All steps complete": true
}).then(() => {
  ellipsis.noResponse();
}).catch((err) => {
  throw new ellipsis.Error(err, {
    userMessage: "There was a problem logging your response."
  });
});
}
