const Discord = require('discord.js');
const { RockPaperScissors } = require('discord-gamecord')


module.exports =  {
    name: "pedrapapeltesoura",
    description: "[🎮 DIVERSÃO] Jogue pedra, papel ou tesoura",
    
    run: async (client, message, args) => {

new RockPaperScissors({
  message: message,
  slash_command: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Pedra, papel ou tesoura',
    description: 'Pressione o botão abaixo para fazer uma escolha!',
    color: 'RANDOM',
  },
  buttons: {
    pedra: 'pedra',
    papel: 'papel',
    tesoura: 'tesoura',
  },
  emojis: {
    pedra: '🪨',
    papel: '📃',
    tesoura: '✂️',
  },
  othersMessage: 'Você não tem permissão para usar botões para esta mensagem!',
  chooseMessage: 'Você escolheu {emoji}!',
  noChangeMessage: 'Você não pode alterar sua escolha! ✋',
  askMessage: 'Eii {opponent}, {challenger} desafiou você para jogar pedra, papel ou tesoura! 🤜🤛',
  cancelMessage: 'Parece que o pedido foi recusado. 😔',
  timeEndMessage: 'Como o oponente não respondeu, cancelei o jogo! 🤷‍♀️',
  drawMessage: 'Foi um empate! 😱',
  winMessage: '{winner} Ganhou o jogo 🏆!',
  gameEndMessage: 'O jogo ficou inacabado 😢',
}).startGame();
}};