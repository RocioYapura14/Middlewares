const fs = require ("fs");
const path = require("path");

module.exports = (req,res,next) => {
    fs.appendFileSync(path.join(__dirname, "../logs/userLogs.txt"),`Ingreso correctamente a: ${req.url}\n`);
    next()
}