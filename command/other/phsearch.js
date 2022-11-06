const { fetchJson } = require("../../utils");

/**
 * @type { ICommand }
 */
module.exports = {
    name: "phsearch",
	premium: true,
	premiumType: ["artix"],
	alias: ["phs","phse"],
	category: "random",
	desc: "Search video in PornHub",
    async exec({ sock, msg, args }) {
        if(args.length == 0) return msg.reply("Example : .phsearch japan")
        let text = ""
        const data = await fetchJson(`https://kocakz.herokuapp.com/api/media/pornhub/search?query=${args.join(" ")}`)
            for(var i = 0; i< data.res.results.length;i++ ){
                text += `Title : ${data.res.results[i].title}\n`;
                text += `Link : ${data.res.results[i].link}\n\n`
                i++
            }
            await sock.sendMessage(msg.from, { image: { url: 'https://variety.com/wp-content/uploads/2018/06/pornhub-logo.jpg' }, caption: text })
    },
}
