const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "RPG",
  author: "gabriel",

  run: async(client, message, args) => {

    let vida = await db.fetch(`vida_${message.author.id}`)
    if(vida === null) vida = 21
    let comida = await db.fetch(`comida_${message.author.id}`)
    if(comida === null) comida = 4
    let água = await db.fetch(`água_${message.author.id}`)
    if(água === null) água = 2
    let coins = await db.fetch(`coins_${message.author.id}`)
    if(coins === null) coins = 0

const RPG = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setTitle(`Informações RPG`)
    .setDescription(`Minhas informações de RPG

Minha vida:
${vida}%\n
Meu armazenamento de comida
${comida}%\n
Meu armazenamento de água
${água}%\n
Meu dinheiro
${coins}`)

    message.reply({embeds: [RPG]})
      },
}; 