const password = require('password-gen-v1')
const Discord = require ('discord.js')

exports.run = async (client, message, args) => {
    

    const pass = password.newPassword(8)
    const pass2 = password.newPassword(19, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()')
    
const senha = new Discord.MessageEmbed()
        .setColor('#0000')
        .setTitle('SENHA GERADA ✅')
        .addField(`SENHA COMUM: ${pass}\n`,`**SENHA DIFICIL: ${pass2}**`)

        message.channel.send("Senha gerada, olhe seu privado");
        message.author.send({ embeds: [senha] });
}