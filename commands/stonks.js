const jimp = require("jimp")
const Discord = require('discord.js')
const ms = require("ms")

module.exports.config = {
        name: "stonks",
        aliases: ['stonkszinho'],
        category: 'image',
        accessableby: "Todo Mundo"
};
exports.run = async (client, message, args) => {


        let img = jimp.read("https://cdn.discordapp.com/attachments/918907678057721941/928035656066801724/fortnite-recebe-skin-stonks-571x300.jpg")
        if (!args[0]) return message.reply("**Digite uma mensagem para o stonks falar.**")
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                       image.resize(885, 494)
                                           image.print(font, 450, 180, args.join(" "), 7000)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "stonks.jpg****"}]})
                })
            })
        })
  }