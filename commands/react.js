module.exports = {
    name: "react",
    description: "react to 25 recent messages",
    run: async (message, args) => {

        let emoji = "👦🏿"

        if (args.length != 0) {
            emoji = args[0]
        }

        if (emoji.includes(":") && emoji.includes(">")) {
            const str = emoji.split(":")[2]
            emoji = str.substring(0, str.length - 1)

            emoji = message.guild.emojis.find(e => e.id == emoji)
        }

        await message.delete()

        const messages = await message.channel.fetchMessages({limit: 25})

        const startTime = new Date().getTime()

        console.log("reacting to " + messages.size + " messages with " + emoji + "..")

        for (msg of messages.keys()) {
            msg = messages.get(msg)

            await msg.react(emoji)
        }

        const endTime = new Date().getTime()
        const timeTaken = (endTime - startTime) / 1000

        console.log("finished reacting to " + messages.size + " messages with " + emoji + " in " + timeTaken + "s")
    }
}