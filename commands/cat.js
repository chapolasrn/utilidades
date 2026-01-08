const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "cat",
    aliases: ["meow"],
     permissions: ["ADMINISTRATOR"],

     run: async(client, message, args)=> {

 const { image } = await fetch("https://some-random-api.ml/animal/cat").then(res => res.json())

 const embed = new Discord.MessageEmbed()
         .setTitle("🐱 Meow 🐱")
         .setImage(image)
         .setColor("#8c3cc2")
         .setFooter({ text: `embed by: ${message.author.username}` });

  message.channel.send({ embeds: [embed] })

    }

}