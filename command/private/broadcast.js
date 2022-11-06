const getMessageFromStore = require("@adiwajshing/baileys")
module.exports = {
	name: "bc",
	alias: ["broadcast"],
	category: "private",
	async exec({ sock, msg, args }) {
		try {
			const chats = check4Duplicate(sock.chats.all().map((v) => v.id));
			let text = `*Broadcast*\n\n${args.join(" ")}`;
			//const msg = getMessageFromStore('6282125388500@s.whatsapp.net', 'Bot Sudah Bisa di Pakai')
			for (let id of chats){
				await sock.sendMessage(id, { text: text });
			}//await sock.sendMessage(id, { text });
		} catch (e) {
			await msg.reply(e.message);
		}
	},
};

const check4Duplicate = (chats) => {
	if (!Array.isArray(chats)) {
		return [];
	} else {
		let newChatIds = [];
		for (let id of chats) {
			!newChatIds.includes(id) && id !== "status@broadcast" ? newChatIds.push(id) : "";
		}
		return newChatIds;
	}
};
