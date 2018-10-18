function(channels, ellipsis) {
  ellipsis.success("", {
  next: {
    actionName: "582-warehouse-prompt",
    args: [
      { name: "friday", value: "no" },
      { name: "channels", value: channels }
    ]
  }
});
}
