const { app, BrowserWindow } = require("deskgap");

console.log("Hello");
app.once("ready", () => {
  const win = new BrowserWindow();
  win.loadFile("build/index.html");
});
