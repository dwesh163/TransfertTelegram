require('dotenv').config()

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

async function telegram() {

    bot.on('message', (msg) => {
        const messageText = msg.update.message.text;
    
        bot.telegram.sendMessage(process.env.CHATID, messageText);
      });

    bot.launch()
}

telegram()