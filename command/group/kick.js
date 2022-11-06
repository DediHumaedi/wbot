module.exports = {
	name: "kick",
	category: "group",
	use: "Kick member from group",
	async exec({ sock, msg, args}) {
	    const { from, sender, isGroup, quoted } = msg;
	    const meta = isGroup ? await sock.groupMetadata(from) : "";
		const groupMem = isGroup ? meta.participants : "";
		const admin = isGroup ? getAdmin(groupMem) : "";
		const cekAdmin = (m) => admin.includes(m);
		if (!isGroup) return await msg.reply("Only can be executed in group.");
		if (!cekAdmin(sender))
			return await msg.reply(`Lu bukan Admin !\nGa usah so keras lo kontol ${msg.pushName}`);
			
	    let id = args.join(" ").replace("@","");
		await sock.groupParticipantsUpdate(msg.key.remoteJid, [`${id}@s.whatsapp.net`], "remove")
		await sock.sendMessage(msg.from, {text: "Member Berhasil di kick !"}, {quoted: msg})
	},
};
function getAdmin(a) {
	let admins = [];
	for (let ids of a) {
		!ids.admin ? "" : admins.push(ids.id);
	}
	return admins;
}
