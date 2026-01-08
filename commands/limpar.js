const { Client, Message, MessageEmbed, DiscordAPIError} = require('discord.js');

module.exports = {
    name: 'limpar',
    aliases: ['limpar'],
    
    run: async (client, message, args) => {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`${message.author} **Voce não possui permissão para esse comando.**`)

        try {
            let delamount = args[0];
            let msg_del = parseInt(delamount) + 1

            let incomplet = new MessageEmbed()
            .setTitle(`🧹   Comando de Clear`)
            .setColor("#2F3136")
            .setDescription(`**\n🧹   Descrição: Utilize esse comando para limpar o chat.\n\n<a:803656560512729158:966566841143160853>  Como usar? Use da seguinte forma: .limpar (mensagens) \n\n🧹   Exemplo: !clear 10**`)
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply({embeds: [incomplet]})

           
            if (parseInt(delamount) > 99) 
            return message.reply('🧹   **Voce só pode limpar 1 a 99 mensagens!**')

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            let clear = new MessageEmbed()
            .setColor("#2F3136")
            .setImage(`https://cdn.discordapp.com/attachments/964173844942307338/967318432292962325/standard_8.gif?size=4096`)
            .setDescription(`** Foi limpo ${delamount} mensagens.\n  Faxineiro: ${message.author}**`)  
            
            .addFields({ name: '🦯', value: '```ini\n [LIMPEZA CONCLUÍDA]```', inline: true }) 
                
            
            await message.channel.send({embeds: [clear]});
                
        } catch (e) {
            console.log(e)
        }

    }

}