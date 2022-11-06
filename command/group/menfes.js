const getMessageFromStore = require("@adiwajshing/baileys")
module.exports = {
	name: "menfes",
	alias: ["menfess"],
	category: "group",
	use: "nomortujuan|Pesan|Pengirim",
	async exec({ sock, msg, arg, args }) {
		try {
		    if(args.length == 0 ) msg.reply('ex : .menfes No|Pesan|Pengirim\n\nNote : Nomor harus memakai kode negara Ex : 628128293812 !');
		    
		    let notujuan = arg.split("|")[0] || "_";
		    let body = arg.split("|")[1] || "_";
		    let pengirim = arg.split("|")[2] || "_";
		    let pesan = 
		        '╭───❨ *Pesan Menfes* ❩ \n'+
		        '├ Pesan : '+body+'\n'+
		        '├ Dari : '+pengirim+'\n'+
			    '╰────────────────────\n\n'+
			    '    *Deadrz BOT © 2022*'
            await sock.sendMessage(notujuan+'@s.whatsapp.net', {text: pesan })
            await msg.reply(`Pesan Terkirim Ke @+${notujuan}`);
		} catch (e) {
			await msg.reply(e.message);
		}
	},
};