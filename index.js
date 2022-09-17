const Discord = require('discord.js');
const inlinereply = require('discord-reply');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const token = 'MTAxODUwMjY2NzA2MTk1NjcxOA.G5GDh-.n1LZK9iudQKNgnDPTFYPdtPSIXUx_xGu_KX8zc';

client.login(process.env.TOKEN);

client.on('message', message => {
    if (!message.guild.me.permissionsIn(client.channels.cache.get(message.channel.id)).has("SEND_MESSAGES")) {
        return;
    }
    var wordsToDetect = [
        "quoi",
        "koa",
        "kwa",
        "koi",
        "kua",
        "qwa",
        "qua"
    ]
    var msg = message.content;
    var cleanedMsg = "";
    for (var y = 0; y < msg.length; y++) {
        if (msg.charAt(y).match(/[a-zA-Z]/)) {
            cleanedMsg += msg.charAt(y);
        }
    }
    for (var i = 0; i < wordsToDetect.length; i++) {
        if (cleanedMsg.slice(-(wordsToDetect[i].length)).toLowerCase() == wordsToDetect[i]) {
            try {
                message.lineReply('feur.')
            } catch(e) {
                console.log(e)
            }
        }
    }
});