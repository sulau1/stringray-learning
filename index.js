import chalk from "chalk";
chalk.level = 1;
console.log(
  "Date and time is " + chalk.yellow(new Date().toLocaleString("en-RU"))
);
