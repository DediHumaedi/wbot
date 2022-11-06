module.exports = {
	name: "kkn",
	category: "random",
	async exec({ sock, msg, args }) {
		try {
			if (!args.length > 0) {
				const secs = [
					{
						title: "Pilihan Order",
						rows: [
							{ title: "KKN DESA PENARI 480p", rowId: "#kkn 480", description: "Video Ilegal" },
							{ title: "KKN DESA PENARI 720p", rowId: "#kkn 720", description: "Video Ilegal" },
							{ title: "KKN DESA PENARI 1080p", rowId: "#kkn 1080", description: "Video Ilegal" },
							
						],
					},
				];
				let str = ' 👇 Silahkan Pilih, Klik Tombol Dibawah \n'
				await sock.sendMessage(msg.from, {
					text: str,
					footer: '• Deadrz BOT',
					title: "Link KKN ",
					buttonText: "LIST VIDEO",
					sections: secs,
				});
			} else {
				const type = args[0].toLowerCase();
				switch (type) {
					case "480":
						var str = '📽️Dengan Kualitas Video 480p  \nNormal, Suara Aman\nNamun sedikit pedih ke mata\nSize : 650MB ++';
						var footer = '• Deadrz BOT';
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
						            { urlButton: { displayText: "Download", url: 'https://drive.google.com/uc?id=18-thZw6S4EEvG0gzP2FWs0fYpd3VEEtt&export=download' } },
					            ],
				            },
				            { quoted: msg }
			            );
						break;
					case "720":
						str = '📽️Dengan Kualitas Video 720p \nSuara Ilang, Pakai MX Player Setting Codec Video supaya ada suaranya\nTidak pedih ke mata\nSize : 800MB++';
						footer = '• Deadrz BOT';
	                    await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
						            { urlButton: { displayText: "Download", url: 'https://drive.google.com/uc?id=1yd46bmcoTlFjzXzqhH-gfYILJ0TFIjYn&export=download' } },
					            ],
				            },
				            { quoted: msg }
			            );
			            break;
			        case "1080":
			        	str = '📽️Dengan Kualitas Video 1080p  \nSuara Ilang, Pakai MX Player Setting Codec Video supaya ada suaranya \nEnak Di Liat Seperti Ke bioskop!\nSize : 3GB++';
						footer = '• Deadrz BOT';
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
    								{index: 1, urlButton: {displayText: 'Download', url: 'https://drive.google.com/uc?id=1IcyQyMyRdgz-S8996TulPsXlzMi0fI4-&export=download'}},
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
