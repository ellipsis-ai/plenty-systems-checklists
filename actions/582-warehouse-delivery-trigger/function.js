function(ellipsis) {
  const intro = `
:truck: Hello, this is the 582 Warehouse Delivery Checklist.

Deliveries require all of the following: 
1. Two packing slips per SO are printed off 
1. Product is loaded into vehicle
1. Vehicle information lot is complete.

When you are en-route for today's deliveries with all of these steps complete, click below:
`;
ellipsis.success(intro, {
  choices: [{
    label: "We're good :thumbsup:",
    actionName: "complete-582-warehouse-delivery",
    allowOthers: true
  }]
});
}
