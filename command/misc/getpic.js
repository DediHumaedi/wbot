module.exports = {
	name: "ppic",
	category: "misc",
	use: "Tag a member for get the pic",
	async exec({ sock, msg, args}) {
		if(args.length == 0) return msg.reply('Tag Orangnya')
		let id = args.join(" ").replace("@","")
		try {
		    const ppUrl = await sock.profilePictureUrl(`${id}@s.whatsapp.net`, 'image')
		    await sock.sendMessage(msg.from, {image: {url: ppUrl}, caption: 'Ni pp nya...'}, {quoted: msg})
		}catch(e){
		    await sock.sendMessage(msg.from, {text: 'No life dia , ga ada ppnya'});
		}
	},
};
