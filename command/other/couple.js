const { fetchJson } = require("../../utils");

module.exports = {
	name: "couple",
	alias: ["cp", "copel"],
	category: "random",
	desc: "Photo Couple for BF/GF",
	async exec({ sock, msg, args }) {
		try {
		    const url = await fetchJson(`https://api.akuari.my.id/randomimage/ppcouple`);
			await sock.sendMessage(msg.from, { image: {url : url.hasil.cowok}, caption: "For BF." }, { quoted: msg });
			await sock.sendMessage(msg.from, { image: {url : url.hasil.cewek}, caption: "For GF." }, { quoted: msg });
		} catch (e) {
			await sock.sendMessage(msg.from, { text: `Something bad happend\n${e.message}` }, { quoted: msg });
		}
	},
};
