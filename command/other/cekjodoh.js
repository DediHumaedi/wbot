const { fetchJson } = require("../../utils");

module.exports = {
	name: "cekjodoh",
	alias: ["jodoh"],
	category: "random",
	desc: "Untuk mengetahui kecocokan pasangan",
	async exec({ sock, msg, arg }) {
	    if(arg.length == 0 ) return msg.reply('Gunakan argumen : .cekjodoh Samsuri Arip | Fita Salwi');
	    let nama1 = arg.split("|")[0] || "_";
		let nama2 = arg.split("|")[1] || "_";
		try {
		    const url = await fetchJson(`https://api.akuari.my.id/primbon/ramalanjodoh?nama=${nama1}&pasangan=${nama2}`);
		    var text = `Ramalan Jodoh \n*${nama1} ❤️ ${nama2}*\n`;
		    text += `Positif : ${url.hasil.positif}\n\n`
		    text += `Negatif : ${url.hasil.negatif}`
		    await sock.sendMessage(msg.from, {image: {url: url.hasil.thumb }, caption: text}, {quoted:msg})
		} catch (e) {
			await sock.sendMessage(msg.from, { text: 'Gunakan argumen : .artinama Samsuri Arip | Fita Salwi' }, { quoted: msg });
		}
	},
};
