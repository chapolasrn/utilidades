const { MessageEmbed } = require('discord.js');

module.exports = {
name: 'cabeca',

run: async (client, message, args) => {
   const mensagem = args.join(' ')
        if (!mensagem) return message.reply("Adicione o nick do player que você deseja ver.")
      
     
    var url = `https://minotar.net/cube/${mensagem}/100.png`
      let embed = new MessageEmbed()
        .setAuthor(`CABEÇA DO MINECRAFT`, url)
        .setThumbnail(url)
        .setDescription(`${message.author}, a cabeça do \`\`${mensagem}\`\` esta logo abaixo.`)
        .setImage(url)
        .setColor(`#36393e`)
      message.reply({embeds: [embed] });
}
}