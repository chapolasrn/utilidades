const Discord = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');

module.exports = {
    name: "slap",
    aliases: ["tapa"],  // By: ! 𝑾𝒂𝒍𝒌ˢᵉⁿᵐᵃᵉ#0001

    run: async(client, message, args) => {



  var list = [
    'https://imgur.com/HYJHoG7.gif',
    'https://imgur.com/9GxTsgl.gif',
    'https://imgur.com/mT4VjD6.gif',
    'https://imgur.com/mT4VjD6.gif',
    'https://imgur.com/w66ZqGR.gif'
  ];

    var list1 = [
    'https://imgur.com/oSoudVd.gif',
    'https://imgur.com/T9w8eFV.gif',
    'https://imgur.com/nuDmQu5.gif',
    'https://imgur.com/wlLCjRo.gif',
    'https://imgur.com/sVeYncu.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
    var rand1 = list1[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`❌ | ${message.author} Mencione alguém para dar um Tapa!`);

    if (pessoa.id == message.author.id) return message.channel.send(`❌ | ${message.author} você não dar um Tapa em você!`);

  const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("hug")
                .setStyle("SECONDARY")
                .setLabel("Retribuir")
                .setEmoji(`🔁`)
                .setDisabled(false),
                                new MessageButton()
                .setCustomId("002")
                .setStyle("SECONDARY")
                .setLabel("Cancelar")
                .setEmoji(`❌`)
                .setDisabled(false)
                )

  let kazinho = new Discord.MessageEmbed()
  .setTitle(`🎓 Tapa ✨`)
  .setDescription(`💓 ${message.author} deu um tapa em ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("#1e2104")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`🎓 Tapa ✨`, message.author.displayAvatarURL({format:"png"}));

  const me = await message.channel.send({embeds: [kazinho], components: [row], fetchReply: true})

const filter1 = (interaction) => {
            if(interaction.user.id == pessoa) return true; 
            else {
                interaction.reply({ content: `❌ Apenas ${pessoa}  pode clicar no Botão`, ephemeral: true })
            }
        }


const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 10 * 6000, filter: filter1, max: 1 })




  collector.on('collect', async (m) => {
            
            if (!pessoa)
            return;
            if (m.customId === 'hug') {
            me.edit({
                        embeds: [

                        new Discord.MessageEmbed()
                        .setTitle(`🎓 Tapa ✨`)
                        .setDescription(`💓${pessoa} retribuiu o tapa de ${message.author}!`)
                        .setColor("#1e2104")
                        .setImage(rand1)
                        .setThumbnail(message.author.displayAvatarURL({format:"png"}))
                        .setFooter(`🎓 Tapa ✨`, message.author.displayAvatarURL({format:"png"}))
                                                ]
})
};
 if (m.customId === '002') {
     setTimeout(() => me.delete(), 100)

};
});
        }
}