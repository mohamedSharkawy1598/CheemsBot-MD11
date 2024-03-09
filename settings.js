//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "𝑺𝑼𝑵𝑮" //ur yt chanel name
global.socialm = "𝑺𝑼𝑵𝑮" //ur github or insta name
global.location = "Egypt, Qena, Al-Deir Al-Sharqi" //ur location

//new
global.botname = '𝑨𝑰𝒁𝑬𝑵 𝑩𝑶𝑻' //ur bot name
global.ownernumber = '201015411497' //ur owner number
global.ownername = '𝑺𝑼𝑵𝑮' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPCJmG7dmeXd15uuf1x"
global.wagc = "https://whatsapp.com/channel/0029VaPCJmG7dmeXd15uuf1x"
global.themeemoji = '🧪'
global.wm = "𝑨𝑰𝒁𝑬𝑵 𝑩𝑶𝑻"
global.botscript = 'https://whatsapp.com/channel/0029VaPCJmG7dmeXd15uuf1x' //script link
global.packname = "صلي على النبي "
global.author = "𝑺𝑼𝑵𝑮\n\n+201015411497"
global.creator = "201015411497@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["201015411497"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
