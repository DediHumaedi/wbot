const { fetchJson } = require("../../utils");

module.exports = {
	name: "cvcrypto",
	alias: ['cv', 'cvprice','calc'],
	category: "random",
	desc: "For look the price of crypto",
	async exec({ sock, msg, args }) {
	    if (args.length == 2) return msg.reply(`Untuk Menggunakanya Contoh .cv 100 USDT BTC`)
			let coin1 = args[1].toUpperCase();
			let coin2 = args[2].toUpperCase();
			let jmal = args[0];
			let cvcoin = `${coin1}${coin2}`
			try{
			    const res = await fetchJson(`https://api3.binance.com/api/v3/ticker?symbol=${cvcoin}`)
				let high = parseFloat(res.highPrice).toFixed(3);
			    let low = parseFloat(res.lowPrice).toFixed(3);
			    let last = `${res.lastPrice}`;
				let hasils = jmal * `${last}`;
    		    await sock.sendMessage(msg.from, { text: `📈 High : $${high} \n📉 Low  : $${low} \n📊 Convert Dari ${coin1} Ke ${coin2}\n\n${jmal} ${coin1} =  ${hasils} ${coin2}`, }, { quoted: msg });
		        } catch (e) {
			    await sock.sendMessage(msg.from, { text: `Untuk Menggunakanya Contoh .cv 100 USDT BTC` }, { quoted: msg });
		    }
	},
};