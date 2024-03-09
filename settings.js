//قاعدة بواسطة سونغ
//إعادة التحميل؟ إعادة ترميز؟ رمز النسخ؟ منح الائتمان يا :)
//قناة الواتساب: @aizenbotmd
//رقمي: +201015411497
const fs = require('fs')
const chalk = require('chalk')

//الزيسون
global.sessionid ='ur session id'

//بطاقة المالك الخامس
global.ytname = "𝑺𝑼𝑵𝑮" //ur yt chanel name
global.socialm = "𝑺𝑼𝑵𝑮" //ur github or insta name
global.location = "Egypt, Qena, Al-Deir Al-Sharqi" //ur location

//جديد
global.botname = '𝑨𝑰𝒁𝑬𝑵 𝑩𝑶𝑻' //اسم الروبوت
global.ownernumber = '201015411497' //رقم المطور
global.ownername = '𝑺𝑼𝑵𝑮' //اسم المطور
global.websitex = "https://whatsapp.com/channel/0029VaPCJmG7dmeXd15uuf1x"
global.wagc = "https://whatsapp.com/channel/0029VaPCJmG7dmeXd15uuf1x"
global.themeemoji = '🧪'
global.wm = "𝑨𝑰𝒁𝑬𝑵 𝑩𝑶𝑻"
global.botscript = 'https://whatsapp.com/channel/0029VaPCJmG7dmeXd15uuf1x' //رابط قناة الواتساب
global.packname = "صلي على النبي "
global.author = "𝑺𝑼𝑵𝑮\n\n+201015411497"
global.creator = "201015411497@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["201015411497"] // مستخدم مميز
global.hituet = 0

//bot sett
global.typemenu = 'v8' // نوع القائمة 'v1' => 'v8'
global.typereply = 'v2' // نوع الرد 'v1' => 'v3'
global.autoblocknumber = '92' //ضبط رمز البلد للحظر التلقائي
global.antiforeignnumber = '91' //ضبط رمز البلد المضاد للرقم الأجنبي
global.welcome = false //ترحيب / الخروج في مجموعات
global.anticall = false //يقوم الروبوت بحظر المستخدم عند الاتصال به
global.autoswview = false //عرض الحالة/القصة تلقائيًا
global.adminevent = false //إظهار رسالة الترقية/التخفيض
global.groupevent = false //إظهار رسائل التحديث في الدردشة الجماعية
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
