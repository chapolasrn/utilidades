const Discord = require("discord.js");

module.exports = {
name: "caraoucoroa",

 run: async(client, message, args) => {
    acoisa = [
 'Cara 😎',
 'Coroa 👑'
]

const randomIndex = Math.floor(Math.random() * acoisa.length)

const randomElement = acoisa[randomIndex];
message.channel.send({ content: `${randomElement}` }) 

 


 } 
} 