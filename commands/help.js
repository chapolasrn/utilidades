const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');

module.exports = {
    name: "help",
    aliases: ['ajuda'],
   
    run: async(client, message, args) => {

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("painel_inicial")
                .setStyle("SECONDARY")
                .setLabel("Painel Incial")
                .setEmoji('🏠') 
                .setDisabled(false),
            new MessageButton()
                .setCustomId("moderação")
                .setStyle("SECONDARY")
                .setLabel("Moderação")
                .setEmoji('📒')
                .setDisabled(false),
            new MessageButton()
                .setCustomId("diversao")
                .setStyle("SECONDARY")
                .setLabel("Diversão")
                .setEmoji('🎮') 
                .setDisabled(false),
            new MessageButton()
                .setCustomId("diversos")
                .setStyle("SECONDARY")
                .setLabel("Diversos")
                .setEmoji('🧮')
                .setDisabled(false),
            new MessageButton()
                .setCustomId("fechar")
                .setStyle("SECONDARY")
                .setLabel("Fechar Painel")
                .setEmoji('❌')
                .setDisabled(false)
            )

    const painel = new MessageEmbed()
    .setTitle(`📜 | Kylie - CATEGORIAS`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**__Olá ${message.author}, veja meus comandos com as reações abaixo:__**\n\n\`🏠\` ***Painel Inicial***\n\`📒\` ***Moderação***\n\`🎮\` ***Diversão***\n\`🧮\` ***Diversos***\n\`❌\` ***Fechar Painel***`)
    .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        
    message.delete()
    const m = await message.channel.send({embeds: [painel], components: [row], fetchReply: true})

    const iFilter = i => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter, time: 10 * 60000 });
        collector.on('collect', async(i) => {
            i.deferUpdate()
            switch (i.customId) {
                case 'painel_inicial':
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                            .setTitle(`📜 | Kylie - CATEGORIAS`)
                            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**__Olá ${message.author}, veja meus comandos com as reações abaixo:__**\n\n\`🏠\` ***Painel Inicial***\n\`📒\` ***Moderação***\n\`🎮\` ***Diversão***\n\`🧮\` ***Diversos***\n\`❌\` ***Fechar Painel***`)
                            .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                
                        ]
                    })
                    break;
                case 'moderação':
                    let mod = "Moderação";
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                            .setTitle(`📒 | Moderação (23 comandos)`)
                            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**> ・Todos os comandos de __${mod}:__\n\n・limpar - \`Limpa o chat\`\n・addrole - \`Define um cargo em um jogador\`\n・contador - \`Adicionar sistema de contador em call\`\n・ban - \`Bane alguem do servidor\`\n・unban - \`Desbane alguem do servidor\`\n・anunciar - \`Manda uma mensagem para todos os jogadores\`\n・lock - \`Traca um canal\`\n・unlock - \`Destranca um canal\`\n・lockall - \`Trancar todos os canais\`\n・unlockall - \`Destrancar todos os canais\`\n・privar - \`Privar um canal\`\n・desprivar - \`Desprivar todos os canais\`\n・warn - \`Dar warn para alguém\`\n・verwarn - \`Ver as warns de alguém\`\n・removewarn - \`Remover warn de alguém\`\n・autorole - \`Configurar o autorole\`\n・setnick - \`Trocar o apelido de alguém no servidor\`\n・setvenda - \`Setar ticket de venda\`\n・ticket - \`Setar um ticket\`\n・addemoji - \`Adicionar um emoji no servidor\`\n・sorteio - \`Fazer um sorteio\`\n・castigo - \`Dar castigo a alguém\`\n・kick - \`Expulsar alguém do servidor\`**`)
                            .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                            
                        ]
                    })
                  break;
                case 'diversao':
                    let dvrs = "Diversão (27 comandos)";
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                            .setTitle(`🎮 | Diversão`)
                            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**> ・Todos os comandos de __${dvrs}:__\n\n・ship - \`Veja se uma pessoa é compativel com voce!\`\n・gay - \`Veja se uma pessoa ou voce é gay!\`\n・feio - \`Veja se uma pessoa ou voce é feia!\`\n・gado - \`Veja se você é gado!\`\n・abraçar - \`Abrace uma pessoa!\`\n・beijar - \`Beije uma pessoa!\`\n・tapa - \`Dale um tapa em uma pessoa\`\n・megasoco - \`Dale um soco em uma pessoa\`\n・perguntar - \`Faça uma pergunta e o bot te responderá\`\n・atacar - \`Ataque alguém!\`\n・caraoucoroa - \`Brinque de cara ou coroa\`\n・dog - \`Veja imagens de cachorros\`\n・cat - \`Veja imagens de gatos\`\n・panda - \`Veja imagens de panda\`\n・faustão - \`Fale com o faustão\`\n・football - \`Jogue football\`\n・snake - \`Jogue o jogo snake\`\n・akinator - \`Jogue o jogo akinator\`\n・meme - \`Veja memes\`\n・cantada - \`Lance uma canta a alguém\`\n・tempero - \`Imagens do tempero Sazon\`\n・stonks - \`Gere uma imagem stonks com uma frase\`\n・dado - \`Brinque de dado\`\n・sorte - \`Teste sua sorte\`\n・pokemonquiz - \`Adivinhe o pokemon\`\n・presente - \`De um presente para alguém\`\n hamister - \`Veja fotos de um Hamister\`**`)
                            .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                
                        ]
                    })
                    break;
                case 'diversos':
                    let dvr = "Diversos (19 comandos)";
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                            .setTitle(`🧮 | Diversos`)
                            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**> ・Todos os comandos de __${dvr}:__\n\n・avatar - \`Veja o avatar dos outros\`\n・cleardm - \`Apagar as mensagens do bot em sua dm.\`\n・pesquisar - \`Faça uma pesquisa no google\`\n・say - \`Faça o bot falar algo\`\n・userinfo - \`Veja a info de um player\`\n・serverinfo - \`Veja a info do servidor\`\n・ping - \`Veja meu ping\`\n・skin - \`Veja a skin de alguém no minecraft\`\n・emojiinfo - \`Veja a info de um emoji\`\n・tempocall - \`Veja quanto tempo você esta em um call\`\n・fortnite - \`Visualize a loja do fortnite\`\n・canalinfo - \`Veja a info de um canal\`\n・senha - \`Gere uma senha\`\n・listban - \`Veja a lista de banidos do servidor\`\n・mccabeça - \`Veja a cabeça de um player no minecraft\`\n・botinfo - \`Infos do bot\`\n・rpg - \`Veja o armazem do bot\`\n・uptime - \`Mostrará quanto tempo estou online\`\n・membro - \`Quantos membros/bots no servidor\`\n・pegarid - \`Pegar id de um player\`\n・bug - \`Reportar um bug.\`**`)
                            .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                            
                        ]
                    })
                    break;
                case "fechar":
             
                    m.delete()
            
                    let closed = new MessageEmbed()
            
                    .setDescription(`**${message.author} O painel de ajuda foi encerrado.**`)
                        
                    m.channel.send({embeds: [closed] });
                    
            }
        })

    }
}