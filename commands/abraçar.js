const Discord = require("discord.js")

module.exports = {
    name: 'abraçar', 
    author: "n sei, o pessoal da vl community deu uma melhorada", 
    aliases: ["abraçar"],

    run: async(client, message, args) => {


        var list = [
            'https://imgur.com/RgfGLNk.gif',
            'https://i.imgur.com/r9aU2xv.gif',
            'https://i.imgur.com/wOmoeF8.gif',
            'https://i.imgur.com/nrdYNtL.gif'
          ];
    
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
        if(!args[0]) return message.reply(`❌ | ${message.author} Mencione alguém.`)
        if(user.id === message.author.id) return message.reply(`❌ | ${message.author} Você não pode se abraçar!`)
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`💓 ${message.author} abraçou ${user}!`)
        .setImage(rand)

        message.channel.send({ embeds: [embed]})
    }
}