const { MessageEmbed } = require('discord.js');

module.exports = {
name: 'skin',

run: async (client, message, args) => {
   const mensagem = args.join(' ')
        if (!mensagem) return message.reply("Adicione o nick do player que você deseja ver.")
      
     
    var url = `https://minotar.net/armor/body/${mensagem}/100.png`
      let embed = new MessageEmbed()
        .setAuthor(`SKIN DO MINECRAFT`, url)
        .setThumbnail(url)
        .setDescription(`${message.author}, a skin do \`\`${mensagem}\`\` esta logo abaixo.`)
        .setImage(url)
        .setColor(`#36393e`)
      message.reply({embeds: [embed] });
}
}