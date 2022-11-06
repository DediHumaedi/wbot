const { fetchJson } = require("../../utils");

module.exports = {
	name: "crypto",
	alias: ['p', 'price'],
	category: "random",
	desc: "For look the price of crypto",
	async exec({ sock, msg, args }) {
		if(args.length == 0) return msg.reply('Masukan coin, Example : .crypto BTC')
		let coin = args[0].toUpperCase();
		try {
		    let url = await fetchJson(`https://api3.binance.com/api/v3/ticker?symbol=${coin}USDT`);
		    let memex = `${url.highPrice}`;
			let memex1 = `${url.lowPrice}`;
			let memex2 = `${url.lastPrice}`;
			let last = parseFloat(memex2).toFixed(3);
			let high = parseFloat(memex).toFixed(3);
			let low = parseFloat(memex1).toFixed(3);
		    await sock.sendMessage(msg.from, { text: `*── 「 HARGA ${coin} 」 ──*\n\n🏷️ Price : $${last} \n📈 High : $${high} \n📉 Low  : $${low} \n`, }, { quoted: msg });
		} catch (e) {
			await sock.sendMessage(msg.from, { text: `Masukan coin, Example : .crypto BTC` }, { quoted: msg });
		}
	},
};