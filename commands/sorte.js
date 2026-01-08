const Discord = require("discord.js");

module.exports = {
    name: "sorte",
    author: "luizao", 

    run: async(client, message, args) => {


    let caiu =
        Math.floor(Math.random() * 9)
        + 1;

    let embed1 = new Discord.MessageEmbed()
        .setTitle(`Ganhou!`)
        .setColor('RANDOM')
        .setDescription(`**Parabéns, você ganhou!**`)
        .setFooter(``, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

    let embed2 = new Discord.MessageEmbed()
        .setTitle(`Perdeu!`)
        .setColor('RANDOM')
        .setDescription(`**Você acaba de perder...**`)
        .setFooter(``, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()



    if (caiu == 8) {
        message.reply({ embeds: [embed1] })
        return;
    }

    else {
        message.reply({ embeds: [embed2] })

    }
}
}