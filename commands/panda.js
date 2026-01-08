const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "panda",
    aliases: ["pan"],
    permissions: ["SEND_MESSAGES"],

run: async(client, message, args)=> {

const { image } = await fetch("https://some-random-api.ml/animal/panda").then(res => res.json())

 const embed = new Discord.MessageEmbed()
         .setTitle("Que panda mais lindo 😍")
         .setDescription(`${message.author.tag} [Clique aqui para visualizar essa imagem](${image})`)
         .setFooter(`Comando utilizado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
         .setImage(image)
         .setColor("RANDOM")
         .setTimestamp()

  message.channel.send({ embeds: [embed] })

    }
}