const Discord = require('discord.js')
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

const token  = 'OTMxNDUyODk1MjY0NjYxNTk0.YeEpGw.35rhfZUJREbuhllu5g8OeteFQr0';

bot.on('ready', () =>{
    console.log('This bot is online!');
})
bot.login(token);