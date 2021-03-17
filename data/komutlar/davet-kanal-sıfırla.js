const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "p!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const rolls = new Discord.RichEmbed()
      .setDescription(
        "``Davet Kanalı Sıfırlama Komutu İçin Yeterli Yetkin Yok.``"
      )
      .setFooter(bot.user.username, bot.user.avatarURL)
      .setColor("BLACK");

    message.channel.send(rolls);
    return;
  }

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`);

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          "Davet kanalı zaten ayarlanmamış! <a:ww:753926446032093234>"
        )
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLACK")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`);
  const rolls = new Discord.RichEmbed()
    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(
      `Davet kanalı başarıyla sıfırlandı! <a:yesiltik2:712519126492643379>`
    );
  message.channel.send(rolls);
  return;
};

module.exports.conf = {
  aliases: ["davetkanalsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal-sıfırla",
  description: "davet-kanal-sıfırla",
  usage: "davet-kanal-sıfırla"
};
