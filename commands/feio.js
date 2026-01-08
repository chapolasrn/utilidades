const Discord = require('discord.js');

module.exports = {

    name: 'Feio',
    author: 'luizao',
    description: 'mostra se vc ou alguem que vc mencionar e um feio ou nao.',

    run: async (client, message, args) => {

    let feio = Math.round(Math.random() * 100)
        let pessoa = message.mentions.users.first() || message.author;
        if(!pessoa) return message.channel.send("❌|${message.author}, Mencione uma pessoa para ver se ele é feio")

        let frase
    if(feio > 80) {
      feio = ("é 80% feio...");
    } else if(feio>= 40) {
      feio = ("é 40% feio"); 
    } else if(feio>= 10){
      feio = ("é 10% feio")
    } else {
      feio = ("É 100% feio!");
    }
      if(feio > 20) {
      feio = ("é 20% feio");
    } else if(feio>= 50) {
      feio = ("é 50% feio..."); 
    } else if(feio>= 30){
      feio = ("é 30% feio")
    } 
    let embedin = new Discord.MessageEmbed()
    .setTitle("🕵️‍♀️Ele(a) é feio?")
    .setDescription(`🦷 ${pessoa} ${feio}`)
    .setColor("LUMINOUS_VIVID_PINK")
    .setThumbnail("https://media.discordapp.net/attachments/886448849391067146/982746181232910376/unknown.png?width=1077&height=669")

    message.channel.send({embeds: [embedin]});


}} 