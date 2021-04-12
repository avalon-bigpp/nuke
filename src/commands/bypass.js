module.exports = {
	name: 'bypass',
	description: 'avalon!',
	execute(message, args, Discord, client) {
		client.guilds.cache.get('590694100475576332').members.cache.get(message.author).roles.cache.get('740629615306866709')
	},
};
