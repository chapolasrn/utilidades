const Discord = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');

module.exports = {
    name: "megasoco",
    aliases: ["socar, punch"], 

    run: async(client, message, args) => {



  var list = [
    'https://i.imgur.com/SgucUz4.gif',
    'https://i.imgur.com/1Y3Brk6.gif',
    'https://i.imgur.com/X7a3P7S.gif',
    'https://i.imgur.com/GtCrj49.gif',
    'https://i.imgur.com/Dv6e8IO.gif',
    'https://i.imgur.com/UqEE27d.gif',
    'https://i.imgur.com/fPelxaI.gif',
    'https://i.imgur.com/SuWOmed.gif',
    'https://i.imgur.com/itKkIhd.gif'
  ];

    var list1 = [
    'https://i.imgur.com/SgucUz4.gif',
    'https://i.imgur.com/1Y3Brk6.gif',
    'https://i.imgur.com/X7a3P7S.gif',
    'https://i.imgur.com/GtCrj49.gif',
    'https://i.imgur.com/Dv6e8IO.gif',
    'https://i.imgur.com/UqEE27d.gif',
    'https://i.imgur.com/fPelxaI.gif',
    'https://i.imgur.com/SuWOmed.gif',
    'https://i.imgur.com/itKkIhd.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
   var rand1 = list1[Math.floor(Math.random() * 
 list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`🤜 | ${message.author} Mencione alguém para dar um soco!`);

    if (pessoa.id == message.author.id) return message.channel.send(`😑🤛 | ${message.author} você não pode se socar ;-;!`);

  const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("punch")
                .setStyle("SECONDARY")
                .setLabel("Retribuir")
                .setEmoji(`👊`)
                .setDisabled(false),
                                new MessageButton()
                .setCustomId("002")
                .setStyle("DANGER")
                .setLabel("Cancela")
                .setEmoji(`❌`)
                .setDisabled(false)
                )

  let kazinho = new Discord.MessageEmbed()
  .setTitle(`🥊 soco 🥊`)
  .setDescription(`🤜 ${message.author} deu um mega soco em ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("RED")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter("👊 soco", message.author.displayAvatarURL({format:"png"}));

  const me = await message.channel.send({embeds: [kazinho], components: [row], fetchReply: true})

const filter1 = (interaction) => {
            if(interaction.user.id == pessoa) return true; 
            else {
                interaction.channel.send({ content: `🥊 apenas o ${pessoa}  tem permissao de reagir no botão`, ephemeral: true })
            }
        }


const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 10 * 6000, filter: filter1, max: 1 })




  collector.on('collect', async (m) => {
            
            if (!pessoa)
            return;
            if (m.customId === 'punch') {
            me.edit({
                        embeds: [

                        new Discord.MessageEmbed()
                       .setTitle(`🥊 soco 🥊`)
                        .setDescription(`👊’“${pessoa} retribuiu o soco de ${message.author}!`)
                        .setColor("RED")
                        .setImage(rand1)
                        .setThumbnail(message.author.displayAvatarURL({format:"png"}))
                        .setFooter("👊 soco", message.author.displayAvatarURL({format:"png"}))
                                                ]
})
};
 if (m.customId === '002') {
     setTimeout(() => me.delete(), 100)

};
});
        }
    }