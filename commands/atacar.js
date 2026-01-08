const Discord = require('discord.js')

module.exports = {
    name: 'atacar',
    description: '『👤 - Social 』Ataque uma pessoa.',
 
    run: async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
      if(!args[0]) return message.reply(`❌ | ${message.author} Mencione o usuario que você queira atacar!`)
      if(user.id === message.author.id) return message.reply(`❌ | ${message.author} Você não pode se propio atacar!`)
       
        var lista1 = [
            'https://loritta.website/assets/img/actions/attack/generic/gif_69.gif','https://loritta.website/assets/img/actions/attack/generic/gif_9.gif','https://loritta.website/assets/img/actions/attack/generic/gif_32.gif','https://loritta.website/assets/img/actions/attack/generic/gif_32.gif','https://loritta.website/assets/img/actions/attack/generic/gif_103.gif','https://loritta.website/assets/img/actions/attack/generic/gif_103.gif','https://loritta.website/assets/img/actions/attack/generic/gif_41.gif','https://loritta.website/assets/img/actions/attack/generic/gif_87.gif','https://loritta.website/assets/img/actions/attack/generic/gif_65.gif','https://loritta.website/assets/img/actions/attack/generic/gif_107.gif;https://loritta.website/assets/img/actions/attack/generic/gif_101.gif','https://loritta.website/assets/img/actions/attack/generic/gif_28.gif','https://loritta.website/assets/img/actions/attack/generic/gif_54.gif','https://loritta.website/assets/img/actions/attack/generic/gif_75.gif','https://loritta.website/assets/img/actions/attack/generic/gif_57.gif','https://loritta.website/assets/img/actions/attack/generic/gif_111.gif'
        ];

        var lista2 = [
       
        'https://loritta.website/assets/img/actions/attack/generic/gif_69.gif','https://loritta.website/assets/img/actions/attack/generic/gif_9.gif','https://loritta.website/assets/img/actions/attack/generic/gif_32.gif','https://loritta.website/assets/img/actions/attack/generic/gif_32.gif','https://loritta.website/assets/img/actions/attack/generic/gif_103.gif','https://loritta.website/assets/img/actions/attack/generic/gif_103.gif','https://loritta.website/assets/img/actions/attack/generic/gif_41.gif','https://loritta.website/assets/img/actions/attack/generic/gif_87.gif','https://loritta.website/assets/img/actions/attack/generic/gif_65.gif','https://loritta.website/assets/img/actions/attack/generic/gif_107.gif;https://loritta.website/assets/img/actions/attack/generic/gif_101.gif','https://loritta.website/assets/img/actions/attack/generic/gif_28.gif','https://loritta.website/assets/img/actions/attack/generic/gif_54.gif','https://loritta.website/assets/img/actions/attack/generic/gif_75.gif','https://loritta.website/assets/img/actions/attack/generic/gif_57.gif','https://loritta.website/assets/img/actions/attack/generic/gif_111.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new Discord.MessageEmbed()
            .setDescription(`**\🤕
  ${message.author} atacou ${user}!**`)
            .setImage(`${random1}`)
            .setColor('RANDOM')

        const button = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('ataque')
                    .setLabel('Retribuir')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new Discord.MessageEmbed()
            .setDescription(`**\🤕|${user} Retribuiu o ataque de ${message.author}.**`)
            .setColor('RANDOM')
            .setImage(`${random2}`)

        message.reply({ embeds: [embed], components: [button] }).then(() => {
            const filter = i => i.customId === 'ataque' && i.user.id === user.id;
            const collector = message.channel.createMessageComponentCollector({ filter, max: 1 });

            collector.on('collect', async i => {
                if (i.customId === 'ataque') {
                    i.reply({ embeds: [embed1] })
                }
            });
        })
    }
}