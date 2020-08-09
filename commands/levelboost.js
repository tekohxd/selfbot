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
                text: args.join(" ")
            })
            if (!running) {
                startBoost(message.client)
            }
            return await message.edit("added to list")
        }

    }
}

async function startBoost(client) {
    if (running) {
        return
    }
    running = true
    setInterval(async () => {
        channels.forEach(async ch => {
            const channel = client.channels.find(c => c.id == ch.channel)

            if (!channel) {
                console.log("deleted " + ch.channel)
                return channels.delete(ch.channel)
            }

            await channel.send(channels.get(ch.channel).text + " `" + makeid(Math.floor(Math.random() * 10) + 1) + "`").then(m => {
                m.delete(15000).catch()
            })
            console.log("level booster sent in channel " + channel.name)
        })
    }, 60000)
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }