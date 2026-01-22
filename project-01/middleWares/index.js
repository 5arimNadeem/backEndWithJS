const fs = require('fs')
function logReqRes(fileName) {
    // there is the use of the closure concept in it
    return (req, res, next) => {
        fs.appendFile(
            fileName,
            `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
            (err, data) => {
                next();
            }
        )
    }
}

module.exports = {
    logReqRes
}