const Discord = require("discord.js");

exports.run = async(client, message, args) => {
var list = [
  'Sim!',
  "Não!",
  "Talvez.",
  "Pergunta pro seu pai!",
  "Eu não!",
  "Óbvio que sim!",
  "Com certeza.",
  "Óbvio que não!"
];

var rand = list[Math.floor(Math.random() * list.length)];
let pergunta = args.slice(1).join(" ");
if (!pergunta) return message.channel.send(rand)

message.channel.send(rand)
}