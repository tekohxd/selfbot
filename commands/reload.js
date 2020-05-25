module.exports = {
    name: "reload",
    description: "reload commands",
    run: async (message, args) => {
        const { reloadCommands } = require("../selfbot.js")

        await message.delete()
        reloadCommands()
    }
}