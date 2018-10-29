const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready", () => {
  console.log("Bot Online")
  
 bot.user.setActivity("Claim This Bot Today", {type: "STREAMING'})
});

bot.on("message", (message) => {
  if(message.content === "+test") {
    message.channel.send("Ok")
    }
  });
  
bot.login(process.env.TOKEN)
