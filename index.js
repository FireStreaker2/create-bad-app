#!/usr/bin/env node

const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const os = require("os");

console.log(chalk.red("Generating Files...\n"));

const currentDirectory = process.cwd();
let newDirectoryName = process.argv[2];
let directoryNameExists = true;
const username = process.env.USER || os.userInfo().username;
const extension = process.argv[3] || ".js";

if (newDirectoryName) {
  const newDirectoryPath = path.join(currentDirectory, newDirectoryName);
  fs.mkdirSync(newDirectoryPath);
  process.chdir(newDirectoryPath);
} else {
    newDirectoryName = "create-bad-app";
    directoryNameExists = false;
}

const generateFiles = () => {
  fs.writeFileSync("./LICENSE", `MIT License\n\nCopyright (c) ${new Date().getFullYear()} ${username}\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.`);
  fs.writeFileSync("./README.md", `# ${newDirectoryName}\nThis project was generated using <a href="https://github.com/FireStreaker2/create-bad-app">create-bad-app</a>.`);
  fs.writeFileSync(`index${extension}`, "");
}

generateFiles();

console.log(chalk.blue("Files have been succesfully generated!"));
if (newDirectoryName == false) {
    console.log(chalk.blue("To get started, you can run the following:"));
    console.log(chalk.green(`cd ${newDirectoryName}`));
}
console.log(chalk.blue("Happy coding!"));