const Discord = require('discord.js')
const { GuessThePokemon } = require('discord-gamecord')

module.exports =  {
    name: "quemeessepokemon",
    author: "luizao",
    description: "[🎮 DIVERSÃO] Quem é esse pokemon?",
    
    run: async (client, message, args) => {

      new GuessThePokemon({
        message: message,
        slash_command: false,
        embed: {
          title: 'Quem é esse Pokemon?',
          footer: 'Você tem apenas 1 chance para acertar.',
          color: 'RANDOM',
        },
        time: 60000, ///Tempo de inatividade em milissegundos
        thinkMessage: '**Pensando...**',
        winMessage: 'Boa! O pokemon é... **{pokemon}!**',
        stopMessage: 'Demorou demais! O pokemon era **{pokemon}**',
        incorrectMessage: 'Talvez da próxima vez... 🥲 O pokemon era **{pokemon}**',
      }).startGame();
    
    }
}