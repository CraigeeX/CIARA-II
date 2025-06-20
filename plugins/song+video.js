const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) | return reply ("Please give me url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🎶 *CIARA II SONG DOWNLOADER* 🎶

tittle: ${data.tittle}
description: ${data.description}
time: ${data.timestamps}
ago: ${data.ago}
views: ${data.views}

> Created by CraigeeX🌹
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption::desc},{quoted:mek})

//download audio
    
let down = await fg.yta(url)
let downloadUl = down.dl_url

//send audio + document message 
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.tittle +".mp3",caption:"MADE BY CraigeeX"},{quoted:mek})
         




}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===========video_dl============

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) | return reply ("Please give me url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
📽 *CIARA II VIDEO DOWNLOADER* 📽

tittle: ${data.tittle}
description: ${data.description}
time: ${data.timestamps}
ago: ${data.ago}
views: ${data.views}

> Created by CraigeeX🌹
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption::desc},{quoted:mek})

//download video
    
let down = await fg.ytv(url)
let downloadUl = down.dl_url

//send video+document message 
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.tittle +".mp4",caption:"MADE BY CraigeeX💚"},{quoted:mek})
        




}catch(e){
console.log(e)
reply(`${e}`)
}
})
