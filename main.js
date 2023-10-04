require('dotenv').config()

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

async function telegram() {

    bot.command('start', async (ctx) => {
        ctx.reply("Hello i'm a bot...")
    })
    bot.launch()
}

telegram()