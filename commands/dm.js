const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "dm", // Coloque o nome do comando do arquivo
    aliases: ["dm"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        let d = db.get(`premium_${message.author.id}`);

        if (d !== true) {

            message.reply(`Este comando é apenas para usuários premium.`)

        } else {

            message.reply(`Parabéns ${message.author}! Você está utilizando meu comando premium.`);
            message.react("🎊");



        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply(`Você não possui permissão de \`Administrador\`.`)
        } else {
            let user = message.mentions.users.first() || client.users.cache.get(args[0]);
            let dm_msg = args.slice(1).join(" ");
            if (!user || !args[1]) {
                message.reply({ embeds: [
                    new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\`!dm [usuário] [mensagem]\``)
                ] })
            } else {
                    message.reply({ content: `A mensagem foi enviada com sucesso para \`${user.tag}\`.`, embeds: [
                        new Discord.MessageEmbed()
                        .setTitle(`Mensagem:`)
                        .setDescription(`||\n${dm_msg}\n||`)
                    ] }).then(m => {
                        user.send(dm_msg).catch(e => {m.edit({ content: `\\❌ Ops! A dm do usuário \`${user.tag}\` está bloqueada!`, embeds: [
                            new Discord.MessageEmbed()
                            .setTitle(`Mensagem que seria enviada:`)
                            .setDescription(`||\n${dm_msg}\n||`)
                        ] })})
                    })
                    
                }
            }  
        }
    }
}