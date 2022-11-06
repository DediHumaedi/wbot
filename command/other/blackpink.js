module.exports = {
	name: "blackpink",
	category: "random",
	desc: "Nekonime image",
	async exec({ sock, msg, args }) {
		try {
		    let url = `https://api.akuari.my.id/ephoto/blackpink?text=${args.join(" ")}`;
			await sock.sendMessage(msg.from, { image: { url }, caption: "Your Blackpink Here." }, { quoted: msg });
		} catch (e) {
			await sock.sendMessage(msg.from, { text: `Something bad happend\n${e.message}` }, { quoted: msg });
		}
	},
};
