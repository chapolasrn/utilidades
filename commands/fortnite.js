
const Discord = require ("discord.js")

module.exports = {
    name: "fortnite",
    description: "[⭐ Utilidades] Mostra a loja do fortnite",

    run: async(client, interaction, args) => {

        let embed = new Discord.MessageEmbed()
        .setTitle(`🔥 - Loja do Fortnite `)
        .setImage(`https://api.nitestats.com/v1/shop/image?footer=%20Get%20free%20APIs%20on%20BDFD%20Codes-APis:%20http://gg.gg/sharecodes&background=00000014.png`)
        .setColor("RED")
        .setTimestamp()

        interaction.reply({ embeds: [embed] })
  
    }
}