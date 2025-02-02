const translate = require("google-translate-api-x");

const translateText = async (text, targetLang) => {
  try {
    const res = await translate(text, { to: targetLang });
    return res.text;
  } catch (error) {
    console.error(`Translation Error: ${error.message}`);
    return text;
  }
};

module.exports = translateText;
