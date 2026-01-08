const Discord = require('discord.js')

module.exports = {

    name:'hamister',
    author:'luizao',

    run: async(client, message, args, ) => {

        var hamister = [

            'https://cdn.discordapp.com/attachments/990800583910899723/991174114947629127/c18a2c7a37ee1f2c618a63bb1186909f.gif',
            'https://media.discordapp.net/attachments/990800583910899723/991174229158535178/hamster-spinning.gif',
            'https://media.discordapp.net/attachments/990800583910899723/991174349543440414/gifs-de-hamsters-18.gif',
            'https://cdn.discordapp.com/attachments/990800583910899723/991174492225273957/creepy-hamster.gif',
            'https://cdn.discordapp.com/attachments/990800583910899723/991174596613115924/1BO.gif'


        ]
        var randomhamister = hamister[Math.floor(Math.random() * hamister.length)];

            const embedhamister = new Discord.MessageEmbed()

            .setTitle('🐹 **Hamister** 🐹 ')
            .setImage(`${randomhamister}`)
            .setFooter('Ohhhh... que fofo!')

            return message.reply({embeds: [embedhamister]})
    } 
} 