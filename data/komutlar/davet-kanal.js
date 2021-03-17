const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "p!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const rolls = new Discord.RichEmbed()
      .setDescription(
        "``Davet Kanal Komutunu Kullanmak İçin Yeterli Yetkin Yok.``"
      )
      .setFooter(bot.user.username, bot.user.avatarURL)
      .setColor("BLACK");

    message.channel.send(rolls);
    return;
  }

  let kanal = message.mentions.channels.first();

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Lütfen bir kanal belirtiniz!")
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLACK")
    );
  }
  const rolls = new Discord.RichEmbed()
    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(
      `Davet kanalı; ${kanal} olarak ayarlandı! <a:yesiltik2:712519126492643379>`
    );
  message.channel.send(rolls);

  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["davetkanal"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal",
  description: "davet-kanal",
  usage: "davet-kanal"
};
