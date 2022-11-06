module.exports = {
	name: "gabut",
	alias: ["but", "butga"],
	category: "general",
	desc: "For validate NIK",
	async exec({ sock, msg, args}) {
		try {
			if(!args.length > 0){
				const secs =[
					{
						title: "Pilihan Kegabutan",
						rows: [
							{ title: "Katanya Sayang", rowId: "#gabut sayang", description: "Katanya Sayang, Ko Menghilang ?" },
							{ title: "Ajak Jalan", rowId: "#gabut jalan", description: "Ajak Jaln Doi Pakai ini aja" },
							{ title: "Gombal Kesekolah", rowId: "#gabut gombal", description: "Gombal, Kesekolah Cari ilmu" },
							{ title: "Pesan Ayang", rowId: "#gabut pesan1", description: "Kasih ayang ini pasti klepek" },
							{ title: "Ucapan Anniversary", rowId: "#gabut aniv", description: "Buat yg aniv pake ini aja" },
							{ title: "Nembak Cwe", rowId: "#gabut nembak", description: "Nembak doi pake ini auto diterima" },
							{ title: "Sayangi Dirimu", rowId: "#gabut sayang1", description: "Sayangi dirimu apa kita saling sayang" },
							{ title: "Pesan Buat Ayang", rowId: "#gabut pesan2", description: "Pesan Buat ayang kalo mlem" },
							{ title: "Pesan Private", rowId: "#gabut pesan3", description: "Pesan private buat doi" },
							{ title: "Ga Suka Jamu Sukanya Kamu", rowId: "#gabut jamu", description: "Gombalin aja doi pake ini" },
							{ title: "Kamu Ngilang Aku Cemas", rowId: "#gabut ngilang", description: "Gombalin doi pake ini cuys" },
							{ title: "Ucapan Ujian", rowId: "#gabut ujian", description: "Kasih ini aja buat doi yang lagi ujian" },
							{ title: "Ucapan Ultah", rowId: "#gabut ultah", description: "Kasih ini aja buat doi yang lagi Ultah" },
							{ title: "Biar Ga Ngambek", rowId: "#gabut ngambek", description: "Doi lagi ngambek ? Kasi ini aja" },
						],
					},
				];
				await sock.sendMessage(msg.from, {
					text: "Silahkan Pilih Melalui Tombol Dibawah.",
					footer: 'DeadrzBot',
					title: "Gabut Web",
					buttonText: "List",
					sections: secs,
				});
			}else{
				const type = args[0].toLowerCase();
				switch (type){
					case "ujian":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/12" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "ngambek":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/14" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "ultah":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/13" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "sayang":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/1" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "jalan":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/2" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "gombal":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/3" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "pesan1":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/4" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "aniv":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/5" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "nembak":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/6" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "sayang1":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/7" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "pesan2":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/8" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "pesan3":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/9" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "jamu":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/10" } },
								],
							},
							{ quoted: msg }
						);
						break;
					case "ngilang":
						await sock.sendMessage(
							msg.from,
							{
								image: {url: 'https://telegra.ph/file/7a04e81766139bebd4943.jpg'},
								templateButtons: [
									{ urlButton: { displayText: "Klik !", url: "https://sun3haxor.my.id/11" } },
								],
							},
							{ quoted: msg }
						);
						break;
				}
			}
		} catch (e) {
			await sock.sendMessage(msg.from, { text: "Errror" }, { quoted: msg });
		}
	},
};
