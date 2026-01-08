const Discord = require('discord.js')
module.exports = {
    name: 'cantada',
    description: 'Passe uma cantada em alguém.',

    run: async (client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
      if(!args[0]) return message.reply(`${message.author} Mencione o usuario que você quer falar a cantada! :flushed:`)
      
      
        let respostas1 = ["Você não é pescoço, mas mexeu com a minha cabeça!", "Pronto, estou aqui! Quais são os seus outros dois desejos?", "Tem alguma coisa errada com o meu celular. Não consigo encontrar o seu número nele...",
        "Você acredita em amor à primeira vista ou devo passar por aqui mais uma vez?", "Então, além de me deixar sem ar, o que mais você faz?", "Queria desejar noite, porque para ser boa teríamos que estar juntos.",
        "Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui.", "Se nada dura para sempre, quer ser o meu nada?", "Usa aquele shampoo para esquecer o(a), o Euserve.", "Pesquisas apontam que agente junto é erro de gramática, mas a gente separado é erro do destino.",
        "O que eu sinto por você só pode ser motorista, porque passageiro(a) não é.", "Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração.", "Quanto pesa um urso polar? Será o suficiente para quebrar esse gelo entre a gente?",
        ];
        
        let respostas2 = ["Você não é terremoto, mas abalou minha estrutura.", "Você não é GPS quebrado, mas me deixa sem rumo.", "Meu amor por você é igual à obra do governo: nunca acaba.", "Tem certeza de que você não é um extraterrestre? Porque você abduziu o meu coração.",
        "A pressa é sua inimiga? Porque eu ouvi dizer que a pressa é inimiga da perfeição.", "Desativa esse firewall e me deixa invadir o seu coração.", "Meu amor é igual ao mapa de Minecraft: infinito e cheio de surpresas.",
        "Se você quiser pode até me chamar de Buzz Lightyear, porque eu consigo levar a nossa relação ao infinito e além.", "Você deveria entrar em Hogwarts, porque o que você faz com o meu coração só pode ser bruxaria.", "Entre Star Wars e Star Trek, o que eu queria mesmo era star com você."];
        
        
        
        
        let resposta1 = respostas1[Math.floor(Math.random() * respostas1.length)];
        let resposta2 = respostas2[Math.floor(Math.random() * respostas2.length)];

        var lista1 = [
            "https://thumbs.gfycat.com/DependentPoshArmyant-max-1mb.gif",
            "https://c.tenor.com/wyV8J09HxnwAAAAd/ofjiyu-rodrigo-faro.gif",
            "https://media1.tenor.com/images/48d71a044eddd496fb100f1d4cca7cb7/tenor.gif?itemid=25956697",
            "https://c.tenor.com/7MNvqkO9z7YAAAAd/memes-ofjiyu.gif",
            "https://media1.tenor.com/images/7e5eb2296fc5c5e1ae4a71451dbf0e30/tenor.gif?itemid=25956774",
            "https://media.tenor.com/images/94ee556fa21d69677cbbd4ee696c8d8d/tenor.gif"
        ];

        var lista2 = [
            "https://media.tenor.com/images/780ce4f32e944954e097da763134e6f0/tenor.gif",
            "https://media1.tenor.com/images/779344ae90d4aebc3f243375dee59b6c/tenor.gif?itemid=25957143",
            "https://media1.tenor.com/images/50d4577546f05dce9ebc0bb23c201abd/tenor.gif?itemid=25957305",
            "https://media.tenor.com/images/b7598f0c4dfd63363e4c458d50c4cf52/tenor.gif",
            "https://media1.tenor.com/images/fb98729f1c868c831db22d3a547bb04c/tenor.gif?itemid=25957349"
        ];


        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author} Passou uma cantada em ${user}.\n\n ${resposta1}**`)
            .setImage(`${random1}`)
            .setColor('RANDOM')

        const button = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('1')
                    .setLabel('Retribuir')
                    .setStyle('PRIMARY')
                    .setDisabled(true)

            )

        const embed1 = new Discord.MessageEmbed()
            .setDescription(`**${user} Retribuiu a cantada de ${message.user}.\n\n ${resposta2}**`)
            .setColor('RANDOM')
            .setImage(`${random2}`)

        message.reply({ embeds: [embed], components: [button] }).then(() => {
            const filter = i => i.customId === '1' && i.user.id === user.id;
            const collector = message.channel.createMessageComponentCollector({ filter, max: 1 });

            collector.on('llect', async i => {
                if (i.customId === '1') {
                    i.reply({ embeds: [embed1] })
                }
            });
        })
    }
}
