const chalk = require("chalk");
const Moment = require("moment");
const Discord = require("discord.js");
let prefix = "Bot Prefixi";
module.exports = client => {
  const aktiviteListesi = [
    "Youtube Yavuzhan.eXe"

  ];

  client.user.setStatus("online"); //online = çevrimiçi // idle = boşta // dnd = rahatsız etmeyin

  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1));
    client.user.setActivity(aktiviteListesi[Aktivite]);
  }, 2 * 2500);
};

