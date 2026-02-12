const fs = require("fs");

module.exports = {
  config: {
    name: "gali",
    version: "1.0.1",
    author: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Reply when someone abuses (no prefix)"
    },
    longDescription: {
      en: "Automatically replies with roast when specific abusive words are detected."
    },
    category: "no prefix",
    guide: {
      en: "This command works automatically when trigger words are detected."
    }
  },

  // === no prefix event handler ===
  onChat: async function ({ api, event }) {
    const { threadID, messageID, body } = event;
    if (!body) return;

    const triggers = [
      "Rifat bc",
      "Rifat mc",
      "chod",
      "Rifat hala",
      "bc",
      "Rifat khanki",
      "Rifat re chod",
      "Rifat Abal",
      "Rifat Boakachoda",
      "Rifat madarchod",
      "Rifat re chudi",
      "Rifat Bokcd"
    ];

    if (triggers.some(word => body.toLowerCase().includes(word.toLowerCase()))) {
      const msg = {
        body: "তোর মতো বোকাচোদা রে আমার বস রিফাত চু*দা বাদ দিছে🤣\nরিফাত এখন আর hetars দুচে না🥱😈"
      };
      return api.sendMessage(msg, threadID, messageID);
    }
  },

  onStart: async function () {
    // no prefix command, কিছু রান করার দরকার নাই
  }
};
