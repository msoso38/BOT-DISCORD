const Command = require('./command.js')

module.exports = class Ping extends Command {
    

    static match (message) {
        return message.content.startsWith('!v ping')
    }

    static action (message) {
        message.reply('Pong')
    }
}
