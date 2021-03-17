const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const rolls = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Botu Ekleyin!`, `Yakında`)
    .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send(rolls);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
