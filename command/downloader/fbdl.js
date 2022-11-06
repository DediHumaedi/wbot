const { fetchJson } = require("../../utils");
module.exports = {
	name: "fb",
	premium: true,
	premiumType: ["drakath", "nulgath", "artix"],
	alias: ["fbdl", "facebook", "fbvid"],
	category: "downloader",
	desc: "Download Facebook video",
	async exec({ sock, msg, args }) {
		if(args.length < 1) return await msg.reply("No url provided");
			try {
				if(args.length > 1) return await msg.reply("Cukup 1 link");
				const data = await fetchJson(`https://api.akuari.my.id/downloader/fbdl3?link=${args[0]}`)
				await sock.sendMessage(msg.from, { video : {url: data.hasil.hd}}, {quoted: msg});
			} catch (e) {
				await msg.reply(e.message);
				
			}
		
	},
		/*try {
			if (!args.length > 0) return await msg.reply("No url provided");
			let data = await fbdl(args[0]);

			if (data.length === 0)
				return await msg.reply(
					`ID:\n${lang.indo.util.download.fbPriv}\n\nEN:\n${lang.eng.util.download.fbPriv}`
				);
			await sock.sendMessage(msg.from, { video: { url: data[data.length - 1] } }, { quoted: msg });
		} catch (e) {
			await msg.reply(errMess);
		}
	},*/
};