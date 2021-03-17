module.exports = member => {
  let guild = member.guild;
  member.send("Nereye Gittin?");
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
