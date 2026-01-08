const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "dog",
    aliases: ["wolf"],
     permissions: ["ADMINISTRATOR"],

run: async(client, message, args)=> {

const { image } = await fetch("https://some-random-api.ml/animal/dog").then(res => res.json())

 const embed = new Discord.MessageEmbed()
         .setTitle("Worf!!")
         .setDescription(`Cachorro`)
         .setImage(image)
         .setColor("#8c3cc2")

  message.channel.send({ embeds: [embed] })

    }
}