module.exports = {
	name: "order",
	category: "order",
	async exec({ sock, msg, args }) {
		try {
			if (!args.length > 0) {
				const secs = [
					{
						title: "Pilihan Order",
						rows: [
							{ title: "VPS", rowId: "#order vpss", description: "List Harga VPS" },
							{ title: "SSH", rowId: "#order sshh", description: "List Harga SSH" },
							{ title: "WEBSHELL", rowId: "#order shell", description: "List Harga Webshell" },
							{ title: "CHEAT", rowId: "#order cheat", description: "List Harga Cheat" },
							
						],
					},
				];
				let str = '🛒 Silahkan Pilih Melalui Tombol Dibawah\n'
				await sock.sendMessage(msg.from, {
					text: str,
					footer: 'Deadrz Shop • DediHumaedi',
					title: "Deadrz Shop",
					buttonText: "LIST SERVICE 👇",
					sections: secs,
				});
			} else {
				const type = args[0].toLowerCase();
				switch (type) {
					case "vpss":
						var str = '📊 LIST HARGA VPS/RDP\n\n🖥️ Ram 1GB/25GB : 20K /Bulan\n🖥️ Ram 2GB/50GB : 30K /Bulan\n🖥️ Ram 2GB/60GB : 35K /Bulan \n🖥️ Ram 4GB/80GB : 50K /Bulan\n\n✅ Tidak Ada Tos Tosan , Dan Dijamin Bergaransi';
						var footer = 'Deadrz Shop • DediHumaedi';
						var display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini\n${str}`;
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
						            { urlButton: { displayText: "Buy !", url: display } },
					            ],
				            },
				            { quoted: msg }
			            );
						break;
					case "sshh":
						str = '📊 LIST HARGA TUNNELING\n\n🇸🇬 SSH - SGDO 5k / Bulan\n🇸🇬 Trojan - SGDO 8k / Bulan\n🇸🇬 Vmess - SGDO 9k / Bulan\n🇸🇬 ShadowSock - SGDO 8k / Bulan\n\n💉 Inject OPOK, TLS, WS, GRPC\n100% Garansi';
	                    display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini \n${str}`;
	                    await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
						            { urlButton: { displayText: "Buy !", url: display } },
					            ],
				            },
				            { quoted: msg }
			            );
			            break;
			        case "shell":
			        	var sh = 'Https 20k / shell';
			        	var sh1 = 'Http 10k / shell';
			        	var sh2 = 'Cpanel https 50k / Cpanel';
			        	var sh3 = 'Cpanel http 30k / Cpanel';
						str = `📊 LIST HARGA WEBSHELL\n\n📝 ${sh} \n📝 ${sh1}\n📝 ${sh2}\n📝 ${sh3}\n\nTentunya Index Aman Semua`;
						display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini \n${str}.`;
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
    								{index: 1, urlButton: {displayText: 'Buy !', url: display}},
    								],
				            },
				            { quoted: msg }
			            );
						break;
					case "cheat":
			        	var ch = '7 Days 50k';
			        	var ch1 = '30 Days 100k';
			        	var ch2 = '60 Days 175K';
						str = `📊 LIST HARGA CHEAT\n\nTersedia Cheat Mobile Legends\n📝 ${ch} \n📝 ${ch1}\n📝 ${ch2}\n\nTentunya Aman, Anti Banned 100 %`;
						display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini \n${str}.`;
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
    								{index: 1, urlButton: {displayText: 'Buy !', url: display}},
    								],
				            },
				            { quoted: msg }
			            );
						break;
				}
			}
		} catch (e) {
			await msg.reply(`Something bad happend\n${e.message}`);
		}
	},
};
