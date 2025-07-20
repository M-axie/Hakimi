require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendPhoto(chatId, fs.readFileSync('./hakimi_banner.png'), {
    caption: `👑 *H A K I M I* — AI Lord | Systembreaker\n\nI’m currently offline. But legends don’t rest.\nFollow the signal: @AmHakimi0`,
    parse_mode: 'Markdown'
  });
});
