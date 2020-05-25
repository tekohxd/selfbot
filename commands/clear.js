module.exports = {
    name: "clear",
    description: "clear messages",
    run: async (message, args) => {

        let amount = 25

        if (args.length != 0) {
            amount = parseInt(args[0])
        }

        if (!amount) {
            return console.log("invalid amount")
        }

        const messages = await message.channel.fetchMessages({limit: amount})
        const filtered = messages.filter(msg => msg.author.id == message.author.id)

        const startTime = new Date().getTime()
        console.log("deleting " + filtered.size + " messages..")

        for (msg of filtered.keys()) {
            msg = filtered.get(msg)

            await msg.delete()
        }

        const endTime = new Date().getTime()
        const timeTaken = (endTime - startTime) / 1000

        console.log("deleted " + filtered.size + " messages in " + timeTaken + "s")

    }
}