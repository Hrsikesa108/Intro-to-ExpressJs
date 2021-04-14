const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello world!");
  console.log(request);
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today's Date is ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});
app.listen(3000);
