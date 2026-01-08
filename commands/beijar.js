const Discord = require("discord.js")

module.exports = {
    name: 'beijar',
    author: "lz", 
    aliases: ["beijar", "k"],

    run: async(client, message, args) => {


        var list = [
            'https://imgur.com/II1bakc.gif',
            'https://imgur.com/MzAjNdv.gif',
            'https://imgur.com/eKcWCgS.gif',
            'https://imgur.com/3aX4Qq2.gif',
            'https://imgur.com/uobBW9K.gif'
          ];
    
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
        if(!args[0]) return message.reply(`<:erro:975113814745952367> | ${message.author} Mencione alguém.!`)
        if(user.id === message.author.id) return message.reply(`❌ | ${message.author} Você não pode pode se beijar.`)
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`💓 ${message.author} beijou ${user}!`)
        .setImage(rand)

        message.channel.send({ embeds: [embed]})
    }
}