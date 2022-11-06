const { fetchJson } = require("../../utils");

module.exports = {
	name: "ranime",
	alisa: ["anime", "randomanime"],
	category: "weebs",
	desc: "Random Anime image",
	async exec({ sock, msg }) {
		try {
			const url  = await fetchJson("https://api.sun3haxor.my.id/api/randomanime?apikey=LLVOdtcN");
			await sock.sendMessage(msg.from, { image: { url: url.result }, caption: "Your anime here." }, { quoted: msg });
		} catch (e) {
			await sock.sendMessage(msg.from, { text: `Something bad happend\n${e.message}` }, { quoted: msg });
		}
	},
};
