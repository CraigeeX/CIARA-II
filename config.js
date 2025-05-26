const fs = derکارconst fsconst fs = दरकारconst fs = require('fs');
(fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5qyim2.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm CIARA II by CraigeeX",
AUTO_READ_STATUS: PROCESS.ENV.AUTO_READ_STATUS || "true"
MODE: process.env.MODE || "public", // public // inbox // groups // groups and inbox 
};
 
