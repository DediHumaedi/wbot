module.exports = {
	name: "linkgc",
	category: "misc",
	use: "For look a link of groupchat",
	async exec({ sock, msg}) {
		const code = await sock.groupInviteCode(msg.key.remoteJid)
		await sock.sendMessage(msg.from, {text: `Hallo ${msg.pushName} \n\n*LINK GCnya* : https://chat.whatsapp.com/${code}`}, {quoted: msg})
	},
};
