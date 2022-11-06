//const Downloader = require("../../utils/downloader");
//const { insta } = new Downloader();
const { fetchJson } = require("../../utils");
//const axios = require("axios").default;
//const errMes = `ID:\n${lang.indo.util.download.igFail}\n\nEN:\n${lang.eng.util.download.igFail}`;

module.exports = {
	name: "igdl",
	premium: true,
	premiumType: ["drakath", "nulgath", "artix"],
	alias: ["ig"],
	category: "downloader",
	desc: "Download instagram media",
	async exec({ sock, msg, args }) {
		if(args.length < 1) return await msg.reply("No url provided");
			try {
				if(args.length > 1) return await msg.reply("Cukup 1 link");
				const data = await fetchJson(`https://api.sun3haxor.my.id/api/igdownload?url=${args[0]}&apikey=LLVOdtcN`)
				await sock.sendMessage(msg.from, { video : {url: data.result.link}}, {quoted: msg});
			} catch (e) {
				await msg.reply('Error Coba yng lain');
				
			}
		
	},
		/*if (!args.length > 0) return await msg.reply("Ex: !igdl *instagram_url*");
		try {
			const ar = await insta(args[0]);
			if (ar.uriType === "igHigh") {
				const type = await fastCheck(ar.media[0].url);
				let ext = /image/.test(type)
					? { image: { url: ar.media[0].url } }
					: { video: { url: ar.media[0].url } };
				await sock.sendMessage(msg.from, { ...ext }, { quoted: msg });
			} else if (ar.uriType === "igStory") {
				const type = await fastCheck(ar.media[0].url);
				let ext = /image/.test(type)
					? { image: { url: ar.media[0].url } }
					: { video: { url: ar.media[0].url } };
				await sock.sendMessage(msg.from, { ...ext }, { quoted: msg });
			} else {
				ar.url.map(async (r) => {
					const type = await fastCheck(r);
					let ext = /image/.test(type) ? { image: { url: r } } : { video: { url: r } };
					await sock.sendMessage(msg.from, { ...ext }, { quoted: msg });
				});
			}
		} catch (e) {
			await msg.reply(errMes);
		}
	},*/
};

/* function fastCheck(url) {
	const resp = await axios.get(url);
	return resp.headers["content-type"];
}*/
