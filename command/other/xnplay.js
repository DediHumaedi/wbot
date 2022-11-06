const { footer } = require("../../config.json");
const { fetchJson } = require("../../utils");

module.exports = {
	name: "xnplay",
	category: "random",
	desc: "Play Video from xnxx.",
	async exec({ sock, msg, args }) {
		const { from, sender } = msg;
		if (args.length < 1) return await msg.reply("No query given to search.");
		const xnPlay = await fetchJson(`https://api.sun3haxor.my.id/api/xnsearch?query=${args.join(" ")}&apikey=LLVOdtcN`);
		try {
			let sections = [{ title: "Select result", rows: [] }];
			var i = 0
			while ( i < xnPlay.result.length ) {
				const info = xnPlay.result[i].info.replace("\n", " ");
				let info1 = info.replace("\n"," ")
		    	let info2 = info1.replace("\n"," ")
				sections[0].rows.push({ title: `${xnPlay.result[i].title}`, rowId: `#xndl ${xnPlay.result[i].link}`, description: `${info2}`});
				i++
				}
			await sock.sendMessage(
				msg.from,
				{
					text: "Click button below to choose another search result.\n",
					buttonText: "Search Result",
					footer: footer,
					mentions: [sender],
					sections,
				},
				{ quoted: msg }
			);
			sections = null;
	    	}catch (e) {
				console.log(e);
				await msg.reply("Something wrong when sending the file");
		    }
	},
};
