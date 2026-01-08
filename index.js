const Discord = require("discord.js"); 
//const client = new Discord.Client({intents: 32767, partials: ["MESSAGE", "USER", "REACTION"]});
const client = new Discord.Client({ intents: 32767, partials: ["MESSAGE", "USER", "REACTION"] });
const db = require ('quick.db')
const config = require("./config.json");

client.login(config.token); 


client.on("ready", () => {
    let status = ["PLAYING", "WATCHING", "LISTENING", "COMPETING"]
    let activities = [
        `🩸 Ouvindo 010001010101`,
        `🔔 Utilize ${config.prefix}help`
      ],
      i = 0;
    setInterval( () => {let random = status[Math.floor(Math.random()*status.length)]
  client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: `${random}`
        })}, 1000 * 10);  

    console.log(`📂 -> O bot foi conectado na index.js\n⚙️ -> O bot conseguiu encontrar a config.json!\n📍 -> Usando: ${config.prefix}help Você optem informações.\n🤖 -> Nome do bot: ${client.user.tag}\n💎 Gerenciando: ${client.guilds.cache.size} servidores!\n💻 -> Tendo acesso a ${client.channels.cache.size} canais!\n🚀 -> Contendo: ${client.users.cache.size} usuarios me usando!` )
});


//comando inexistente

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  
   const args = message.content
       .trim().slice(config.prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();
  
   try {
       const commandFile = require(`./commands/${command}.js`)
       commandFile.run(client, message, args);
   } catch (err) {
  
     let emoji_eryk = "❌";
     let eryk_author = message.author;
     let prefixo_eryk = config.prefix;
     let comando_inexistente = `${prefixo_eryk}${command}`;
  
     message.channel.send(`${emoji_eryk} | ${eryk_author} O comando \`${comando_inexistente}\` não existe! Use .help`).then(m => { setTimeout(() => { m.delete() }, 10000) })//10 segundos
  
   console.error('Erro:' + err);
  }
  });

  //contador
client.on("guildMemberAdd", (member) => {
    let id = db.get(`contador_${member.guild.id}`);
    let canal = member.guild.channels.cache.get(id);
    if (!canal) return;

    let membros = member.guild.memberCount;
    canal.setName(`👥 Membros: ${membros}`)
})
client.on("guildMemberRemove", (member) => {
    let id = db.get(`contador_${member.guild.id}`);
    let canal = member.guild.channels.cache.get(id);
    if (!canal) return;

    let membros = member.guild.memberCount;
    canal.setName(`👥 Membros: ${membros}`)
})

//boas vindas (setentrada)
client.on('guildMemberAdd', async (member) => {

    let canalboa = db.get(`boasvindachannel_${member.guild.id}`)
    if (canalboa === null) return;
  
    let embed = new Discord.MessageEmbed()
    .setDescription(`Ola ${member.user}, seja bem vindo(a) ao servidor \`${member.guild.name}\`!`)
    .setColor('RANDOM')
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor({ name: member.guild.name, iconURL: member.guild.iconURL({ dynamic: true })})
  
    member.guild.channels.cache.get(canalboa).send({content: `${member.user}`, embeds: [embed] }).catch(e => {})
    
}) 

    //qnd alguém adiciona o bot
    client.on("guildCreate", async (guild) => {
    
        const fetchedLogs = await guild.fetchAuditLogs({
          limit: 1,
          type: 'BOT_ADD'
        })
        const addAuthorLog = fetchedLogs.entries.first();
        const { executor, target } = addAuthorLog;
        
        executor.send(`Olá ${executor.tag}, entre em meu servidor de suporte! https://discord.gg/Xr7ewutg\nMuito obrigado por me adicionar no servidor \`${guild.name} (${guild.id})\` `)
       //Entre no meu servidor de suporte! https://discord.gg/tP8Hn9kMe7
})

//msg bloqueadas
client.on("messageCreate", message => {

    if(message.content == `seu macaco` || message.content == `Seu macaco` || message.content == `Seu preto` || message.content == `seu preto` || message.content == `sua puta` || message.content == `Sua puta` || message.content == `seu gorila` || message.content == `Seu gorila` ) //Caso queira mais, siga as intruções
    message.reply(`Esta mensagem foi bloqueada.`).then( msg => {
        setTimeout(() => {
            message.delete()//Evento para excluir a mensagem que o usuário mandou
        },300) //tempo, cada 1000 é 1 segundo
    })
});

//////////////////MENSAGEM QUANDO FALA ALGUMA COISA////////////////

client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // Se quem mandar for bot ele não irá responder
        if(message.content.includes("Bom dia")) {
          message.reply("Bom dia, meu consagrado!") //O que ele irá responder
        }
    })

     client.on("messageCreate", async (message) => {
        if (message.author.bot) return; // Se quem mandar for bot ele não irá responder
            if(message.content.includes("bom dia")) {
              message.reply("Bom dia, meu consagrado!") //O que ele irá responder
            }
        })

        client.on("messageCreate", async (message) => {
            if (message.author.bot) return; // Se quem mandar for bot ele não irá responder
                if(message.content.includes("Boa noite")) {
                  message.reply("Boa noite amore!") //O que ele irá responder
                }
            })

        client.on("messageCreate", async (message) => {
                if (message.author.bot) return; // Se quem mandar for bot ele não irá responder
                    if(message.content.includes("boa noite")) {
                      message.reply("Boa noite!") //O que ele irá responder
                    }
                })

                                client.on('interactionCreate', (interaction) => {

if(interaction.customId == '1') {
interaction.guild.channels.create('COMPRA', {
type: 'GUILD_TEXT',
permissionOverwrites: [
{
id: interaction.guild.roles.everyone,
deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'MENTION_EVERYONE']
},
{
id: interaction.user.id,
allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
}
]
                                                                
}).then(emb1 => {

let buttons1 = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setCustomId('2')
.setStyle('DANGER')
.setLabel('FECHAR TICKET') //para tirar a função doo )  até let
.setEmoji("❌")
)


let enviar1 = new Discord.MessageEmbed()
.setColor("DARK_AQUA")
.setThumbnail(interaction.guild.iconURL({ dynamic: true}))
.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({format: "png"}))
.setDescription(`**Olá ${interaction.user} VOCÊ CRIOU UM TICKET DE COMPRA!\n\nAguarde para ser atendido.**`) // coloque seu pix
emb1.send({ embeds: [enviar1], components: [buttons1]})

interaction.reply({content: `Canal Criado`, ephemeral: true})
})
}
    
if(interaction.customId == '2') {
    
interaction.channel.delete()
    
}

})

// anticrash
process.on('unhandledRejection', (reason, p) => {
    console.log(' [antiCrash] :: Unhandled Rejection/Catch');
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(' [antiCrash] :: Uncaught Exception/Catch');
    console.log(err, origin);
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
    console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
    console.log(' [antiCrash] :: Multiple Resolves');
    console.log(type, promise, reason);
});  

//autorole
client.on("guildMemberAdd",  async (member) => {
    let luizao_autorole = db.get(`luizao_autorole_${member.guild.id}`);
    if (!luizao_autorole === null) return;
    member.roles.add(luizao_autorole)
  });

  client.on('message', msg => {
    if (msg.content === '!random') {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        msg.reply(`Seu número aleatório é: ${randomNumber}`);
    }
});

