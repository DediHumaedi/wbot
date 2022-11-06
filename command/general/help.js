const djs = require("../../lib/Collection");
const { footer, botName, timezone} = require("../../config.json");
const { timeFormat } = require('../utils');
const moment = require('moment-timezone');

module.exports = {
	name: "help",
	alias: ["h", "cmd", "menu"],
	category: "general",
	async exec({ sock, msg, args, isOwner }) {
		if (args[0]) {
			const data = [];
			const name = args[0].toLowerCase();
			const { commands, prefix } = djs;
			const cmd = commands.get(name) || commands.find((cmd) => cmd.alias && cmd.alias.includes(name));
			if (!cmd || (cmd.category === "private" && !isOwner)) return await msg.reply("No command found");
			else data.push(`*Cmd:* ${cmd.name}`);
			if (cmd.alias) data.push(`*Alias:* ${cmd.alias.join(", ")}`);
			if (cmd.limit) data.push(`*Limit:* ${cmd.consume || 1}`);
			if (cmd.premium) data.push(`*Premium:* ${cmd.premiumType.join(" / ")}`);
			if (cmd.desc) data.push(`*Description:* ${cmd.desc}`);
			if (cmd.use)
				data.push(
					`*Usage:* \`\`\`${prefix}${cmd.name} ${cmd.use}\`\`\`\n\nNote: [] = optional, | = or, <> = must filled`
				);

			return await msg.reply(data.join("\n"));
		} else {
			const { pushName, sender } = msg;
			const { prefix, commands } = djs;
			const cmds = commands.keys();
			let category = [];

			for (let cmd of cmds) {
				let info = commands.get(cmd);
				if (!cmd) continue;
				if (!info.category || info.category === "private" || info.owner) continue;
				if (Object.keys(category).includes(info.category)) category[info.category].push(info);
				else {
					category[info.category] = [];
					category[info.category].push(info);
				}
			}
			let str =
				`Hello, ${pushName === undefined ? sender.split("@")[0] : pushName}\n\n` +
				`⏰ : ${moment().locale('id').tz(timezone).format('dddd, DD MMMM YYYY HH:mm:ss')}\n` +
				`🚀 *Bot Berjalan :* ${timeFormat(process.uptime())}\n\n` +
				'*Here My Command List*\n\n' +
				`╭──────❨ *${botName}* ❩\n`+
				"├Owner : Dedi Humaedi\n├Github : @Deadrz\n├Wa : wa.me/6282125388500\n├Web : https://api.sun3haxor.my.id\n"+
				"╰─────────\n"  +
				"╭──────❨ *DONATE* ❩\n├ Dana : 082125388500\n├ Ovo : 082125388500\n" +
				"├ Bank BNI : 1112469796 \n╰─────────\n\n";
			const keys = Object.keys(category);
			for (const key of keys) {
				str += `╭──────❨ *${key.toUpperCase()}* ❩\n\`\`\`${category[key]
					.map(
						(cmd, idx) =>
							`├ ${idx + 1}. ${cmd.name}${cmd.limit ? ` (${cmd.consume || 1} limit)` : ""}${
								cmd.premium ? ` (Premium Only)` : ""
							}`
					)
					.join("\n")}\`\`\`\n╰──────────────\n`;
			}
			str += `_send ${prefix}help followed by a command name to get detail of command, e.g. ${prefix}help sticker_`;
			str += `\n\n_if you want this bot, Contact me via WA : wa.me/+6282125388500, Thanks_\n\n`;
			await sock.sendMessage(
				msg.from,
				{
					image: {url: 'http://202.157.176.247:8000/welcome.png'},
					caption: str,
					footer: footer,
					templateButtons: [
						{ urlButton: { displayText: "My Api Web", url: "https://api.sun3haxor.my.id" } },
						{
							urlButton: {
								displayText: "Github",
								url: "https://github.com/henceutbeey",
							},
						},
					],
				},
				{ quoted: msg }
			);
		}
	},
};
