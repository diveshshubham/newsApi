const app = require("./index");
    app.listen(8083, () => {
      console.log(process.env.ENV)
      console.log("Server has started!");
    });
module.exports = app