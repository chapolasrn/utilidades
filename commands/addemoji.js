const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');


module.exports = {
  name: "addemoji",
  aliases: ["adde", "commands"],
  Permissions: ['ADMINISTRATOR'],
  usage: '.addemoji <emoji>',
  category: "Utility",
  description: "Adicionado o emoji requerido pela pessoa",

  run: async (client, message, args) => {

    if (!args.length)
    return message.channel.send({content: 'Especifique o emoji que deseja adcionar no servidor!'});

    for (const emojis of args) {
        const getEmoji = Discord.Util.parseEmoji(emojis);


        if (getEmoji.id) {
            const emojiExt = getEmoji.animated ? '.gif' : '.png';
            const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`;
            message.guild.emojis
            .create(emojiURL, getEmoji.name)
            .then((emoji) =>
            
            message.channel.send({content: ` **| Adcionado no servidor ${message.guild.name}! |**`})
            );

         const embed = new MessageEmbed()
            .setTitle(`Um novo amoji acaba de ser adcionado!ㅤㅤ\nㅤ`)
            .setColor(`WHITE`)
            .setDescription(`A imagem ao lado equivale\nao emoji que acab de ser adcionado\nㅤ`)
            .setThumbnail(`https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`)
            //.setImage(false)
            //.setAuthor(false)
            //.setFooter(false)
            .addFields(
        {
            name: `__**Add por:**__`,
            value: `**${message.author.toString()}**`,
            inline: false
        }
    )
    
    message.channel.send({embeds: [embed]})

        }
    }
    
}

}
