const s = require("express");

const a = s();
a.get("/", (req, res) => {
  res.send("ok");
});

a.listen(3000);
