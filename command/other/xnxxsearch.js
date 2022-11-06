const { fetchJson } = require("../../utils");

module.exports = {
	name: "xnsearch",
	alias: ["xnsc","xns"],
	category: "random",
	desc: "Search video in xnxx",
	async exec({ sock, msg, args }) {
		if(args.length == 0) return msg.reply('Masukan query , Example : .xnsearch japan')
		const cari = args.join(" ")
		try {
			const url = await fetchJson(`https://api.sun3haxor.my.id/api/xnsearch?query=${cari}&apikey=LLVOdtcN`)
		    var text = ""
		    var i = 0
		    while(i < url.result.length){
		    	text += `💦 Judul : ${url.result[i].title}\n💀 Owner : ${url.result[i].creator}\n`;
		    	let info = url.result[i].info.replace("\n"," ")
		    	let info1 = info.replace("\n"," ")
		    	let info2 = info1.replace("\n"," ")
		    	text += `Info : ${info2}\n🔗 Link : ${url.result[i].link}\n\n`;
		    	i++
		    }
		    await sock.sendMessage(msg.from, { image: {url: 'https://avatars.mds.yandex.net/i?id=4a203f650653f77ee9b8e9f9805000bd-5257239-images-thumbs&n=13'}, caption : text});
		} catch(e){
		    await sock.sendMessage(msg.from, {text: e.message}, { quoted: msg});
		}
	},
};
