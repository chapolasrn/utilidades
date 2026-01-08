const Discord = require("discord.js");

module.exports = {
    name: "dado", // Coloque o nome do comando do arquivo

    run: async(client, message, args) => {


    let caiu =
        Math.floor(Math.random() * 9)
        + 1;

    let embed1 = new Discord.MessageEmbed()
        .setTitle(`Ganhou !`)
        .setColor('RANDOM')
        .setDescription(`**O dado caiu ${caiu} você Ganhou!**`)
        .setFooter(`Parabéns, você ganhou!`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

    let embed2 = new Discord.MessageEmbed()
        .setTitle(`Perdeu !`)
        .setColor('RANDOM')
        .setDescription(`**🎲 | O dado caiu ${caiu} você Perdeu! O dado deve cair no 8 para você ganhar.**`)
        .setFooter(`Você perdeu KKK`, message.author.displayAvatarURL({ dynamic: true }))
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