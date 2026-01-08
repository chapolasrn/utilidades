const Discord = require('discord.js');

module.exports = {

    name: 'gay',
    description: 'mostra se vc ou alguem que vc mencionar e um gay ou nao.',

    run: async (client, message, args) => {

    let gay = Math.round(Math.random() * 100)
        let pessoa = message.mentions.users.first() || message.author;
        if(!pessoa) return message.channel.send("❌|${message.author}, Mencione uma pessoa para ver se ele é")

        let frase
    if(gay > 80) {
      gay = ("é 80% gay...");
    } else if(gay>= 40) {
      gay = ("é 40% gay"); 
    } else if(gay>= 10){
      gay = ("é 10% gay")
    } else {
      gay = ("É 100% gay!");
    }
      if(gay > 20) {
      gay = ("é 20% gay");
    } else if(gay>= 50) {
      gay = ("é 50% gay..."); 
    } else if(gay>= 30){
      gay = ("é 30% gay")
    } 
    let embedin = new Discord.MessageEmbed()
    .setTitle("Então ele(a) é?")
    .setDescription(`🏳️‍🌈 ${pessoa} ${gay}`)
    .setColor("LUMINOUS_VIVID_PINK")
    .setThumbnail("https://c.tenor.com/kh_F1WNQ1oUAAAAC/buzz-lightyear-ent%C3%A3o-ele%C3%A9.gif")

    message.channel.send({embeds: [embedin]});


}} 