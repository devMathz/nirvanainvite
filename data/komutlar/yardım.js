const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "p!";
  const rolls = new Discord.RichEmbed()
    .setDescription(`\`\`\`Davet Sistemi Ayarlamak İçin Gereken Komutlar\`\`\``)
    .addField(
      `Davet Komutları`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\` \`rütbe-ekle\` \`rütbe-sil\` \`rütbe-liste\``
    )

    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(rolls);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
