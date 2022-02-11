const Discord = require("discord.js")
module.exports = {
    name: "avatar",
    aliases: ["avatar", "pp"],
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;

  if (user) {

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}  Buyur avatarın:`)

      .setImage(user.displayAvatarURL({ dynamic: true }))

      .setTimestamp()

      .setFooter("HR 💖 SS");

    message.channel.send(embed);

  } else {

    const embed = new Discord.MessageEmbed()

      .setAuthor(

        `${message.author.tag}  Buyur avatarın:`,

        message.author.avatarURL

      )

      .setImage(message.author.avatarURL({ dynamic: true }))

      .setTimestamp()

      .setFooter("HR 💖 SS");

    message.channel.send(embed);

  }
    }
}