const Discord = require('discord.js')
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

const token  = '';

bot.on('ready', () =>{
    console.log('This bot is online!');
})
bot.login(token);
