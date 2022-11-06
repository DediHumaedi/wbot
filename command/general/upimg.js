const { uploaderAPI } = require("../../utils/uploader");
const { fetchJson } = require("../../utils");

module.exports = {
	name: "upimg",
	alias: ["upld"],
	category: "general",
	desc: "For Upload picture",
	async exec({ sock, msg, arg }) {
		const { quoted, from, type } = msg;

		const content = JSON.stringify(quoted);
		const isMedia = type === "imageMessage";
		const isQImg = type === "extendedTextMessage" && content.includes("imageMessage");
		//const isQDoc = type === "extendedTextMessage" && content.includes("documentMessage");
		let buffer;

		try {
			if ((isMedia && !msg.message.videoMessage) || isQImg) {
				buffer = isQImg ? await quoted.download() : await msg.download();
				const imageUrl = (await uploaderAPI(buffer, "uguu")).data.url;
				await sock.sendMessage(msg.from, {text: `link gambarnya : ${imageUrl}`}, {quoted: msg});
			}
			(buffer = null);
		} catch (e) {
			await msg.reply("Error while creating image");
		}
	},
};
