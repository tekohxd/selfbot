const ascii = require("figlet")

module.exports = {
    name: "ascii",
    description: "convert text to ascii",
    run: async (message, args) => {

        ascii(args.join(" "), async function(err, data) {
            if (!err) {
                data = "```" + data + "```"
                if (data.length > 1950)  {
                    return console.log("ascii text too big")
                } else {
                    await message.edit(data)
                    console.log("edited message successfully")
                }
            }
        })

    }
}