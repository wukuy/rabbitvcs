let path = require("path");

let RabbitVCSSvn = (args, cwd) => {
    let spawn = require("child_process").spawn;
    let command = "/usr/bin/rabbitvcs";
    let options = { cwd: cwd };

    let tProc = spawn(command, args, options)

    tProc.stdout.on("data", (data) => {
        console.log("stdout: " + data);
    })

    tProc.stderr.on("data", (data) => {
        console.log("stderr: " + data);
    });
    tProc.on("close", (code) => {
        console.log("child process exited with code " + code);
    });
}

let diff = (currFile) => {
    RabbitVCSSvn(["diff", currFile], path.dirname(currFile));
}

let revert = (currFile) => {
    RabbitVCSSvn(["revert", currFile], path.dirname(currFile))
}

let update = (currFile) => {
    RabbitVCSSvn(["update", currFile], path.dirname(currFile))
}

let add = (currFile) => {
    RabbitVCSSvn(["add", currFile], path.dirname(currFile))
}

let commit = (currFile) => {
    console.log(currFile);
    RabbitVCSSvn(["commit", currFile], path.dirname(currFile))
}

let rename = (currFile) => {
    RabbitVCSSvn(["rename", currFile], path.dirname(currFile))
}

let log = (currFile) => {
    console.log(currFile);
    RabbitVCSSvn(["log", currFile || '.'], path.dirname(currFile))
}

module.exports = {update, rename, add, revert, diff, commit, log};