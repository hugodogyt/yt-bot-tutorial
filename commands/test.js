const Discord = require('discord.js')

module.exports = {
   name: 'test',
   execute(message, args){
       message.channel.send('hi!')
   }
}