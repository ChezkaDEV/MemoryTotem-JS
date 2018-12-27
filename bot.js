const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", message => {
    if (message.content === "/ping") {
       message.message("poop");
    } else if (message.content === "/estj") {
        message.reply("Lets see what C.S. Joseph thinks about ESTJs! https://cdn.discordapp.com/attachments/460862072138498048/463928638505746452/ESTJ.jpg");
    }





});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
