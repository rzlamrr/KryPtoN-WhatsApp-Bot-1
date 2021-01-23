export {}
const Canvas = require('wa-canvas')

const welcome = (pushname, gcname, picprofil) => new Promise((resolve, reject) => {
    async function welcome () {
        const image = await new Canvas.Welcome()
            .setUsername(pushname)
            .setGuildName(gcname)
            .setAvatar(picprofil)
            .setColor('border', '#8015EA')
            .setColor('username-box', '#8015EA')
            .setColor('message-box', '#8015EA')
            .setColor('title', '#8015EA')
            .setColor('avatar', '#8015EA')
            .toAttachment()

        const buff = image.toBuffer()
        return buff
    }
    welcome().then((hasil) => resolve(hasil)).catch((err) => {
        reject(err)
    })
})

const goodbye = (pushname, gcname, picprofil) => new Promise((resolve, reject) => {
    async function goodbye () {
        const image = await new Canvas.Goodbye()
            .setUsername(pushname)
            .setGuildName(gcname)
            .setAvatar(picprofil)
            .setColor('border', '#8015EA')
            .setColor('username-box', '#8015EA')
            .setColor('message-box', '#8015EA')
            .setColor('title', '#8015EA')
            .setColor('avatar', '#8015EA')
            .toAttachment()

        const buff = image.toBuffer()
        return buff
    }
    goodbye().then((hasil) => resolve(hasil)).catch((err) => {
        reject(err)
    })
})

module.exports = {
    welcome,
    goodbye
}