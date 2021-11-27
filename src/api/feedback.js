const internalConfig = require('../../config/internalConfig')
const TelegramBot = require('node-telegram-bot-api')

let bot = null
if (internalConfig.telegramToken && internalConfig.telegramChatId) {
  bot = new TelegramBot(internalConfig.telegramToken, { polling: true })
}

module.exports = {
  sendFeedback: (req, res) => {
    if (!bot) {
      res.json({ success: false })
      return
    }

    try {
      bot.sendMessage(
        internalConfig.telegramChatId,
        `
<b>Name</b>: ${req.body?.name}
<b>Email</b>: ${req.body?.email}
<b>Message</b>: ${req.body?.message}
      `,
        { parse_mode: 'HTML' }
      )

      res.json({
        success: true
      })
    } catch (e) {
      console.error(e)
      res.json({
        success: false
      })
    }
  }
}
