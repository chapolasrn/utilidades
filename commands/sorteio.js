const Discord = require("discord.js");
const ms = require("ms"); // npm i ms

module.exports = {
    name: "giveaway",
    aliases: ["gw"],
    description: 'Serve para excluir os tickets, somente cargos com tag de ADMINISTRATOR conseguem executar este comando!',

    run: async(client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply('> **Não tem permissão para usar este comando!**').then(m => {
        setTimeout(() => {
            m.delete()
        }, 10000) // 10 segundos
      })

    const canal = message.mentions.channels.first();
    const tempo = args[0]
    const prémio = args.slice(2).join(" ");

    const erro1 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${message.author} faça \`${process.env.PREFIX}giveaway [tempo] + [canal] + [prémio]\``)

    const erro2 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${message.author} o tempo precisa de ter o seguinte formato: 1d, 1h ou 1m, D = Dia / H = Hora / M = Minuto.`)

    const erro3 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${message.author} tem que mencionar um canal específico! Faça \`${process.env.PREFIX}giveaway [tempo] + [canal] + [prémio]\``)

    const erro4 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${message.author} tem que adicionar um prémio! Faça \`${process.env.PREFIX}giveaway [tempo] + [canal] + [prémio]\``)


    if (!args[0]) {
        return message.channel.send({ embeds: [erro1] }).then(m => {
          setTimeout(() => {
              m.delete()
          }, 5000) // 5 segundos
        })
    }

    if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m")) {
        return message.channel.send({ embeds: [erro2] }).then(m => {
          setTimeout(() => {
              m.delete()
          }, 5000) // 5 segundos
        })
    }

    if (isNaN(args[0][0])) {
        return message.channel.send({ embeds: [erro3] }).then(m => {
          setTimeout(() => {
              m.delete()
          }, 5000) // 5 segundos
        })
    }

    if (!canal) {
        return message.channel.send({ embeds: [erro3] }).then(m => {
          setTimeout(() => {
              m.delete()
          }, 5000) // 5 segundos
        })
    }

    if (!prémio) {
        return message.channel.send({ embeds: [erro4] }).then(m => {
          setTimeout(() => {
              m.delete()
          }, 5000) // 5 segundos
        })
    }
// ${prémio}
// 🎉
// ${message.author}
    const start = new Discord.MessageEmbed()
    .setTitle("Novo sorteio!")
    .setDescription(`Clique em 🎉 para participar\n
    **Sorteio criado por:**\n***${message.author}***\n
    **Esta Sorteando:**\n${prémio}`)
    .setFooter('O sorteio irá acabar')
    .setTimestamp(Date.now() + ms(args[0]))
    .setColor("BLACK");

    const finish = new Discord.MessageEmbed()
    .setTitle(prémio)
    .setDescription(`Não há participantes suficientes para determinar um vencedor!\nIniciado por: **${message.author}**`)
    .setColor("BLACK")

    const m = await canal.send({ content: `@everyone`, embeds: [start] })
    m.react("🎉");

    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        return canal.send({ content: `🎉   **GIVEAWAY TERMINADO**   🎉`, embeds: [finish]});
      }

    const decisão = m.reactions.cache
    .get("🎉")
    .users.cache.filter((u) => !u.bot)
    .random();

    const vencedor = new Discord.MessageEmbed()
    .setDescription(`Parabéns ${decisão} você ganhou: ${prémio}`)
    .setColor('BLACK')
    canal.send({ content: `${decisão}*`, embeds: [vencedor] });
    }, ms(args[0]));
},
}