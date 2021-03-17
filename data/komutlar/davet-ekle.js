const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "p!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const rolls = new Discord.RichEmbed()
      .setDescription(
        "``Davet Ekleme Komutunu Kullanmak İçin Gerekli Yetkiniz Yok.``"
      )
      .setFooter(bot.user.username, bot.user.avatarURL)
      .setColor("BLACK");

    message.channel.send(rolls);
    return;
  }

  let u = message.mentions.users.first();
  let m = args.slice(1).join(" ");
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription(
          "Davet Eklenecek Kişiyi Etiketleyiniz. <a:ww:753926446032093234>"
        )
        .setColor("BLACK")
    );
  }
  if (!m) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription(
          "Kişiye Eklenecek Davet Sayısını Yazın. <a:ww:753926446032093234>"
        )
        .setColor("BLACK")
    );
  }
  const rolls = new Discord.RichEmbed()
    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(
      `${u} Adlı Kişiye  ${m} Belirttiğiniz Davet Eklendi. <a:yesiltik2:712519126492643379>`
    );
  message.channel.send(rolls);

  db.add(`davet_${message.author.id}_${message.guild.id}`, +m);
};

module.exports.conf = {
  aliases: ["davetekle"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-ekle",
  description: "davet-ekle",
  usage: "davet-ekle"
};
