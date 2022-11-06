module.exports = {
	name: "milf",
	category: "random",
	desc: "Milf image",
	async exec({ sock, msg, args }) {
	    try{
			await sock.sendMessage(msg.from, { image: { url: 'https://api.akuari.my.id/randomimganime/milf' }, caption: "Your Milf Here." }, { quoted: msg });
		} catch (e) {
			await sock.sendMessage(msg.from, { text: `Something bad happend\n${e.message}` }, { quoted: msg });
		}
	},
};
