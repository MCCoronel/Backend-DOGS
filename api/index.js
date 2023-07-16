const server = require("./app-server");
const { db } = require("./src/models");
const { controllerTemperaments } = require("./src/controllers");

db.sync({force: false}).then(() => {
  controllerTemperaments.chargeTemperamentsToDB().then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  });
});