const mysql = require('mysql')
require('dotenv').config()
const prefix = process.env.prefix;
const discord = require('discord.js');
const client = new discord.Client();
const keepAlive = require('./server.js');
const con = mysql.createConnection({
    host: process.env.sqlhost,
    user: process.env.sqluser,
    password: process.env.sqlpass,
    database: process.env.sqldb
})

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`)

    con.connect(function(err){
        if (err) throw err;
        console.log('Connected to DB.')
    })
});

client.on('message', async (message) => {
    if(message.content.toLowerCase() === '!verify' && message.guild.id === '730129496119836672' && message.channel.id === '730287566233796659') {
        message.delete()
       
           
                if(message.member.roles.cache.get('730153190435323904')) {
                    message.member.send('Something went wrong, ahhhh! Please contact a staff member.')
                } else {
                    
    message.member.send('You were verified in Starlight Systems! Welcome :)')
    message.member.roles.add('730153190435323904')
    message.member.roles.remove('730153111578083390')
    message.member.roles.add('730277201886314539')
  };
                
            
        
    }
})
client.login(process.env.token)
keepAlive();
client.login(process.env.token)