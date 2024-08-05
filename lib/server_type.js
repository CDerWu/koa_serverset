const path = require('path');
global.SERVER_TYPE = process.cwd().split(path.sep).pop();
try {
    if (process.env.SERVER_TYPE){
        global.SERVER_TYPE = process.env.SERVER_TYPE;
    }
} catch (err) {
    console.log(err);
}
