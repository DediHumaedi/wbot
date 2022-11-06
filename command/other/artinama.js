const { fetchJson } = require("../../utils");

module.exports = {
	name: "artinama",
	alias: ["anama", "nama"],
	category: "random",
	desc: "Untuk mengetahui arti nama",
	async exec({ sock, msg, args }) {
	    if(args.length == 0) return msg.reply('Gunakan argumen : .artinama Dedi Humaedi');
	    const nama = args.join(" ");
		try {
		    const url = await fetchJson(`https://api.sun3haxor.my.id/api/artinama?query=${nama}&apikey=LLVOdtcN`);
		    await sock.sendMessage(msg.from, {text: `${url.hasil}`})
		} catch (e) {
			await sock.sendMessage(msg.from, { text: `Something bad happend\n${e.message}` }, { quoted: msg });
		}
	},
};
