const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],

  run: async(client, message) => {

    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("ping")
      .setLabel(`Atualizar ping`)
      .setStyle("DANGER")
  )

  const embed = new MessageEmbed()
  .setTitle("Pong!")
  .setDescription(`Meu ping esta em ${client.ws.ping} ms`)
  .setColor("BLUE")
  .setThumbnail("https://cdn.pixabay.com/photo/2022/05/23/16/05/table-tennis-7216580_1280.png")
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL({dynamic:true}))
  const msge = await message.channel.send({ content: "**Aguarde um segundo estou calculando o ping.**"})

  setTimeout( () => {
      msge.edit({ content: `${message.author}`, embeds: [embed], components: [button]})
  }, 2000 )

  const collector = message.channel.createMessageComponentCollector({ componentType: "BUTTON" })
  collector.on("collect", (interaction) => {
      if( interaction.customId === "ping" ) {
          interaction.reply({ content: `ping do bot: ${client.ws.ping} ms`, ephemeral: true })
      }
  })
}
};