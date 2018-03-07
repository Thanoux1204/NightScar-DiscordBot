const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("<")

bot.on('ready', function() {
    bot.user.setGame("Command: <help");
    console.log("Connectedç");
});
 
bot.login("process.env.TOKEN");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("📩 la page d'aide vous a été envoyé en message privé ! 👍")
        var embed = new Discord.RichEmbed()
            .setTitle("=-=-=-=-=-: PAGE D'AIDE :-=-=-=-=-=")
            .setDescription("Page de la liste des commande disponible du bot")
            .addField("- Help", "Affiche la liste des commandes du bot disponible", true)
            .addField("- infobot", "Affiche les infos concernant le bot", false)
            .setColor("0xe78501")
            .setFooter("Bon jeu parmis nous ^^")
            message.author.sendEmbed(embed);
    }

    if (message.content === "Salut"){
        message.reply("Salut ça va ?")
        console.log("Commande de Bonjour effectué");
    }

    if (message.content === prefix + "infobot"){
        message.channel.sendMessage("**Name:** _NightScar_ \n **Author:** _Thanoux1204_ \n **Date de Création:** _05/03/2018_ \n **Préfix des commandes:** _<_");
    }
});
