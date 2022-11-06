const { fetchJson } = require("../../utils");

module.exports = {
	name: "asupan",
	category: "random",
	desc: "Asupan Penyegar mata",
	async exec({ sock, msg, args }) {
		try {
			if (!args.length > 0) {
				const secs = [
					{
						title: "Pilihan Order",
						rows: [
							{ title: "Ukhty", rowId: "#asupan ukhty", description: "Video Asupan Para Ukhty" },
							{ title: "Ghea", rowId: "#asupan ghea", description: "Video Asupan Ghea" },
							{ title: "Santuy", rowId: "#asupan santuy", description: "Video Asupan Buat Santuy" },
							{ title: "Bocil", rowId: "#asupan bocil", description: "Video Asupan Para Bocil" },
							{ title: "Cecan", rowId: "#asupan cecan", description: "Photo Asupan Cecan" },
							{ title: "Hijab", rowId: "#asupan hijab", description: "Photo Asupan Hijabers" },
							{ title: "Tiktok", rowId: "#asupan tiktok", description: "Video Asupan Tiktok" },
							{ title: "Rika", rowId: "#asupan rika", description: "Video Asupan Rika Gusriani" },
						],
					},
				];
				await sock.sendMessage(msg.from, {
					text: 'Silahkan Pilih, Klik Tombol Dibawah \n\n',
					footer: '• Deadrz BOT',
					title: "Random Asupan ",
					buttonText: "List",
					sections: secs,
				});
			} else {
				const type = args[0].toLowerCase();
				switch (type) {
					case "ukhty":
						try{
						    let ukhty = await fetchJson('https://api.akuari.my.id/asupan/ukhty')
						    await sock.sendMessage(msg.from, {video: {url: ukhty.respon}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
						break;
					case "ghea":
					    try{
						    let ghea = await fetchJson('https://api.akuari.my.id/asupan/ghea')
						    await sock.sendMessage(msg.from, {video: {url: ghea.respon}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
			            break;
			        case "santuy":
			            try{
						    let santuy = await fetchJson('https://api.akuari.my.id/asupan/santuy')
						    await sock.sendMessage(msg.from, {video: {url: santuy.respon}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
						break;
					case "bocil":
			            try{
						    let bocil = await fetchJson('https://api.akuari.my.id/asupan/bocil')
						    await sock.sendMessage(msg.from, {video: {url: bocil.respon}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
						break;
					case "cecan":
						try{
						    let cecan = await fetchJson('https://api.akuari.my.id/asupan/cecan')
						    await sock.sendMessage(msg.from, {image: {url: cecan.respon}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
						break;
					case "hijab":
						try{
						    let hijab = await fetchJson('https://api.akuari.my.id/asupan/hijab')
						    await sock.sendMessage(msg.from, {image: {url: hijab.respon}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
						break;
					case "tiktok":
						try{
						    await sock.sendMessage(msg.from, {video: {url: 'https://api.akuari.my.id/asupan/tiktok'}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
						break;
					case "rika":
						try{
							let rika = await fetchJson('https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json')
							console.log(rika)
							var result = rika[Math.floor(Math.random() * rika.length)];
						    await sock.sendMessage(msg.from, {video: {url: result.url}, caption: 'For you !'})
						}catch(e){
						    await sock.sendMessage(msg.from, {text: 'Try again !'})
						}
						break;
				}
			}
		} catch (e) {
			await msg.reply(`Something bad happend\n${e.message}`);
		}
	},
};
