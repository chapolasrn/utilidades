const Discord = require('discord.js');

module.exports = {

    name: 'Gado',
    description: 'mostra se vc ou alguem que vc mencionar e um gay ou nao.',

    run: async (client, message, args) => {

    let corno = Math.round(Math.random() * 100)
        let pessoa = message.mentions.users.first() || message.author;
        if(!pessoa) return message.channel.send("❌|${message.author}, Mencione uma pessoa para ver se ele é corno")

        let frase
    if(corno > 80) {
      corno = ("é 80% corno...");
    } else if(corno>= 40) {
      corno = ("é 40% corno"); 
    } else if(corno>= 10){
      corno = ("é 10% corno")
    } else {
      corno = ("É 100% corno!");
    }
      if(corno > 20) {
      corno = ("é 20% corno");
    } else if(corno>= 50) {
      corno = ("é 50% corno..."); 
    } else if(corno>= 30){
      corno = ("é 30% corno")
    } 
    let embedin = new Discord.MessageEmbed()
    .setTitle("Então ele(a) é corno?")
    .setDescription(`🐂 ${pessoa} ${corno}`)
    .setColor("LUMINOUS_VIVID_PINK")
    .setThumbnail("https://www.comprerural.com/wp-content/uploads/2019/11/DSC_0390-2-640x486.jpg")

    message.channel.send({embeds: [embedin]});


}} 