const Discord = require("discord.js")

module.exports = {
    name: 'presente', 
    author: "luizao", 
    aliases: [""],

    run: async(client, message, args) => {


        var list = [
            'https://cdn.discordapp.com/attachments/984648133520785408/991052251462250496/gift-32.gif',
            'https://cdn.discordapp.com/attachments/984648133520785408/991052364079308810/c86a21e370abd85dfd4e0f975bfeeb4f53db30eb_hq.gif',
            'https://cdn.discordapp.com/attachments/984648133520785408/991052524985405450/4758694-gato-dando-presente-cartoon-clipart-anime-cute-character-illustration-desenho-gratis-vetor.jpg',
            'https://cdn.discordapp.com/attachments/984648133520785408/991052703062982686/um-presente-any-malu.gif'
          ];
    
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
        if(!args[0]) return message.reply(`❌ | ${message.author} Mencione alguém.`)
        if(user.id === message.author.id) return message.reply(`❌ | ${message.author} Você não dar um presente para você mesmo!`)
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`💓 ${message.author} deu um presente ao ${user}!`)
        .setImage(rand)

        message.channel.send({ embeds: [embed]})
    }
}