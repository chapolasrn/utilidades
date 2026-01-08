const Discord = require('discord.js')

module.exports = {

    name:'tempero',
    author:'s',

    run: async(client, message, args, ) => {

        var sazon = [

            'https://imgur.com/SHG3PUk.gif',
            'https://imgur.com/GPzuUKF.gif',
            'https://imgur.com/tC7sxM7.gif',
            'https://imgur.com/CosigJN.gif',
            'https://imgur.com/B21mSlA.gif'


        ]
        var randomSazon = sazon[Math.floor(Math.random() * sazon.length)];

            const embedSazon = new Discord.MessageEmbed()

            .setTitle(':salt: **Sazon** :salt: ')
            .setImage(`${randomSazon}`)
            .setFooter('Tempero - Sazon')

            return message.reply({embeds: [embedSazon]})
    } 
} 