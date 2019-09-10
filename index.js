const Discord=require ('discord.js');
const client = new Discord.Client();
client.login('NjIwNzg4NTE4NTY1NzA3Nzg3.XXb4YQ.qCipc0ivozhIjHyRuG-DbcTOh7U')


client.on('message', message =>{
    if (message.content.startsWith("~ping")){
        message.channel.send("Pong!")



    }


})