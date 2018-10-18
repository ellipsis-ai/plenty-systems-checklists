function(channels, ellipsis) {
  ellipsis.success("", {
  next: {
    actionName: "582-warehouse-prompt",
    args: [
      { name: "friday", value: "yes" },
      { name: "channels", value: channels }
    ]
  }
});
}
