const fs = derکارconst fsconst fs = दरकारconst fs = require('fs');
(fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "enter mongodb here" 
};
 
