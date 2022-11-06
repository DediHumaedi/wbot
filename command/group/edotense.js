module.exports = {
	name: "edotense",
	category: "group",
	use: "For kick & add more",
	async exec({ sock, msg, args}) {
	    const { from, sender, isGroup } = msg;
	    const meta = isGroup ? await sock.groupMetadata(from) : "";
		const groupMem = isGroup ? meta.participants : "";
		const admin = isGroup ? getAdmin(groupMem) : "";
		const cekAdmin = (m) => admin.includes(m);
		if (!isGroup) return await msg.reply("Only can be executed in group.");
		if (!cekAdmin(sender))
			return await msg.reply(`Lu bukan Admin !\nGa usah so keras lo kontol ${msg.pushName}`);
			
	    try{
	        let id = args.join(" ").replace("@","");
	        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
            }
		    await sock.groupParticipantsUpdate(msg.key.remoteJid, [`${id}@s.whatsapp.net`], "remove")
		    await sleep(10000)
		    await sock.groupParticipantsUpdate(msg.key.remoteJid, [`${id}@s.whatsapp.net`], "add")
            await sock.sendMessage(msg.from, {text: "Berhasil Edotensei"}, {quoted: msg})
	    }catch(e){
	        await sock.sendMessage(msg.from, {text: "Gagal Edotensei"}, {quoted: msg})
	    }
	},
};
function getAdmin(a) {
	let admins = [];
	for (let ids of a) {
		!ids.admin ? "" : admins.push(ids.id);
	}
	return admins;
}
