const Discord = require("discord.js")
const client = new Discord.Client()
const { prefix, token } = require("./config.json")
const fs = require("fs")
const { table, getBorderCharacters } = require("table")

if (!prefix) {
    return console.error("INVALID PREFIX")
}

if (!token || token == "") {
    return console.error("INVALID TOKEN\nopen config.json and enter your token next to the token field\nif you don't know where to find your token you can google it")
}

const commands = new Discord.Collection();

let commandFiles

function loadCommands() {
    console.log("loading commands..")
    const startTime = new Date().getTime()

    commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
    const failedTable = []

    if (commands.size > 0) {
        for (command of commands.keyArray()) {
            delete require.cache[require.resolve(`./commands/${command}.js`)]
        }
        commands.clear()
    }

    for (file of commandFiles) {
        let command
        
        try {
            command = require(`./commands/${file}`);

            let enabled = true;
        
            if (!command.name || !command.description || !command.run) {
                enabled = false;
            }

            if (enabled) {
                commands.set(command.name, command);
            } else {
                failedTable.push([file, "❌"])
            }
        } catch (e) {
            failedTable.push([file, "❌"])
        }
    }

    const endTime = new Date().getTime()
    const timeTaken = endTime - startTime

    if (failedTable.length != 0) {
        console.log(table(failedTable, {border: getBorderCharacters("ramac")}))
    } else {
        console.log("all commands loaded without error ✅")
    }

    console.log("time taken: " + timeTaken + "ms")
    exports.commands = commands
}

loadCommands()

exports.reloadCommands = loadCommands

client.once("ready", () => {
    console.log("logged in as " + client.user.username + "#" + client.user.discriminator)
    console.log("--stats--")
    console.log("friends: " + client.user.friends.size)
    console.log("servers: " + client.guilds.size)
    console.log("commands: " + commands.size)
    console.log("prefix: " + prefix)
    console.log("- - -")
})

client.on("message", async message => {

    if (message.author.id != client.user.id) return

    const args = message.content.substring(prefix.length).split(" ");

    const cmd = args[0].toLowerCase();

    if (commands.get(cmd)) {;
        return runCommand(cmd, message, args);
    }

})

function runCommand(cmd, message, args) {
    args.shift()
    try {
        commands.get(cmd).run(message, args)
    } catch(e) {
        console.log(e)
    }
}

setTimeout(() => {
    client.login(token)
}, 1500)