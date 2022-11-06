const { uploaderAPI } = require("../../utils/uploader");
const { fetchJson } = require("../../utils");

module.exports = {
	name: "removebg",
	alias: ["rmbg"],
	category: "general",
	desc: "For Remove background",
	async exec({ sock, msg, arg }) {
		const { quoted, from, type } = msg;

		const content = JSON.stringify(quoted);
		const isMedia = type === "imageMessage";
		const isQImg = type === "extendedTextMessage" && content.includes("imageMessage");
		//const isQDoc = type === "extendedTextMessage" && content.includes("documentMessage");
		let buffer, url;

		try {
			if ((isMedia && !msg.message.videoMessage) || isQImg) {
				buffer = isQImg ? await quoted.download() : await msg.download();
				const imageUrl = (await uploaderAPI(buffer, "telegraph")).data.url;
				url = `https://api.akuari.my.id/other/removebg?link=${imageUrl}`
				await sock.sendMessage(msg.from, {image : {url : `${url}`, caption: 'Neh ngab..'}})
				console.log(imageUrl)
			}
			(buffer = null), (url = null);
		} catch (e) {
			await msg.reply('API Limit bro');
		}
	},
};
