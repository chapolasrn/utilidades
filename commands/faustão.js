module.exports = {
    name: "faustao", // Coloque o nome do comando do arquivo
    description: " [ 📚 Diversão ] Faustão ", //Coloque a Descrição Do Comando!
    type: 'CHAT_INPUT',
  
    run: async (client, interaction) => {
  
     
          let respostas = ["Você destruiu o meu ovo!","Olokinho meu!","Ta pegando fogo bixo","Fulano é um monstro sagrado da teledramaturgia brasileira.","Ih Serjão, sujou! :person_running:","Voltamos já com vídeo cassetadas!","Ô loco meu!","Olha só o que faz a maldita manguaça, bicho!","Essa fera ai, meu!","ERRRROOOOOOOOOUUUUUUUU!!!!","A TV é chata no domingo, é para quem não tem dinheiro nem o que fazer. Eu trabalho no domingo por isso. O domingo é chato. Para quem pode viajar e passear, o domingo é maravilhoso.","Que isso bicho, ó u cara lá ó","Você vai morrer :coffin:","Se vira nos 30!"];
          let resposta = respostas[Math.floor(Math.random()*respostas.length)];
  
          try {
  
          interaction.channel.createWebhook('Faustão', {
              avatar: 'https://veja.abril.com.br/wp-content/uploads/2021/01/FAUSTO-SILVA-FAUSTAO-230218.jpg.jpg?quality=70&strip=info&w=680&h=453&crop=1',
  
          }).then(web => {
              web.send(`**${resposta}**`)
              .then(()=> {web.delete() })
          })
  
  
      } catch (e) { console.log(e); interaction.reply(`Eu estou sem a permissão de criar webhooks.`) }
          
  
         
          
      }
  }