const { fetchJson } = require("../../utils");

module.exports = {
	name: "bot",
	category: "random",
	desc: "To chating with bot",
	async exec({ sock, msg, args }) {
	    if (args.length < 1) return await msg.reply("Using example : #bot Lagi apa");
		try {
			const url = await fetchJson(`https://api.simsimi.net/v2/?text=${args.join(" ")}&lc=id`)
			await sock.sendMessage(msg.from, { text: `${url.success}` }, { quoted: msg });
		} catch (e) {
			await sock.sendMessage(msg.from, { text: "Bot lagi turu" }, { quoted: msg });
		}
	},
};
