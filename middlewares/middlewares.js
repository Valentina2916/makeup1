const fs = require("fs");
const path = require("path");
 
const logpath = path.resolve (__dirname,"../log/logs.txt");
const loger= (req,res, next) => {const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
fs.appendFileSync(logpath, log, { encoding: 'utf-8' });
next();
};

module.exports = loger;