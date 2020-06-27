const channels = new Map()
let running = false

module.exports = {
    name: "levelboost",
    description: "boost your level in servers",
    run: async (message, args) => {

        if (args.length == 0) {
            if (channels.has(message.channel.id)) {
                channels.delete(message.channel.id)
                return await message.edit("removed from list")
            }
            channels.set(message.channel.id, {
                channel: message.channel.id,
                text: "hi"
            })
            if (!running) {
                startBoost(message.client)
            }
            return await message.edit("added to list")
        } else {
            channels.set(message.channel.id, {
                channel: message.channel.id,
                text: args[0]
            })
            if (!running) {
                startBoost(message.client)
            }
            return await message.edit("added to list")
        }

    }
}


async function startBoost(client) {
    running = true
    if (running) {
        return
    }
    setInterval(async () => {
        channels.forEach(async ch => {
            const channel = client.channels.find(c => c.id == ch.channel)

            if (!channel) {
                console.log("deleted " + ch.channel)
                return channels.delete(ch.channel)
            }

            await channel.send(channels.get(ch.channel).text).then(m => {
                m.delete(15000).catch()
            })
            console.log("level booster sent in channel " + channel.name)
        })
    }, 60000)
}