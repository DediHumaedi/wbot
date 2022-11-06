const { fetchJson } = require("../../utils");
const { fetchBuffer} = require("../../utils");

module.exports = {
	name: "xndownload",
	alias: ["xnd","xndl","xndownload"],
	category: "random",
	desc: "Download video in xnxx",
	async exec({ sock, msg, args }) {
		if(args.length == 0) return msg.reply('Masukan query , Example : .xndl  https://www.xnxx.com/video-14dwbn02/hot_step_mom_fucks_her_s_best_friend_in_a_hotel_room ')
		const cari = args[0]
		try {
			const url = await fetchJson(`http://api.sun3haxor.my.id/api/xndetail?url=${cari}&apikey=LLVOdtcN`)
			let info = url.result.info.replace("\n"," ");
			let text = `🍌 Judul : ${url.result.title}\n`
			text += `👀 Penonton : ${url.result.duration}\n`
			let info2 = info.replace("\n", " ");
			text += `ℹ️ Info : ${info2.replace("\t\t\t\t\t"," ")}\n`
			/*await sock.sendMessage(
			    msg.from,
				{
					document: await fetchBuffer(url.result.files.high, { skipSSL: true }),
					mimetype: "video/mp4",
					fileName: url.result.title + ".mp4",
					text: text,
				},
				{ quoted: msg }
			);*/
		    await sock.sendMessage(msg.from, {video: {url: url.result.files.high}, caption: text}, {quoted: msg});
		} catch(e){
		    await sock.sendMessage(msg.from, {text: e.message}, { quoted: msg});
		}
	},
};
