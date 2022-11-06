const { fetchJson } = require("../../utils");

module.exports = {
	name: "ceknik",
	alias: ["nik", "cnik"],
	category: "general",
	desc: "For validate NIK",
	async exec({ sock, msg, args }) {
	    if (args.length == 0) return await msg.reply("Using example : #nik 3204110609970001");
		try {
			const url = await fetchJson(`https://api.akuari.my.id/search/nik-checker?query=${args[0]}`)
			let text = `BERIKUT DATA NIK ANDA\n\n`
			text += `Keterangan : ${url.respon.pesan}\n`
			text += `Nik : ${url.respon.nik}\n`
			text += `Jenis Kelamin : ${url.respon.kelamin}\n`
			text += `Tanggal Lahir: ${url.respon.tgl_lahir}\n`
			text += `Provinsi : ${url.respon.provinsi}\n`
			text += `Kota/Kabupaten : ${url.respon.kotakab}\n`
			text += `Kecamatan: ${url.respon.kecamatan}\n`
			text += `Uniqcode : ${url.respon.uniqcode}\n`
			text += `Kodepos : ${url.respon.tambahan.kodepos}\n`
			text += `Pasaran : ${url.respon.tambahan.pasaran}\n`
			text += `Usia : ${url.respon.tambahan.usia}\n`
			text += `Ulang Tahun : ${url.respon.tambahan.ultah}\n`
			text += `Zodiak : ${url.respon.tambahan.zodiak}\n`
			await sock.sendMessage(msg.from, { text: text }, { quoted: msg });
		} catch (e) {
			await sock.sendMessage(msg.from, { text: "NIK Tidak Valid \nLu ga di akuin di indonesia" }, { quoted: msg });
		}
	},
};
