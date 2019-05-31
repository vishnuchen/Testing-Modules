var chalk = require("chalk");

// var message = "Hello " + chalk.yellow("World");
var message = `${chalk.bgCyan("Hello")} ${chalk.yellow("World!!!!!!!")}`;
console.log(message);