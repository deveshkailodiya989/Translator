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
// here is the translate function which will be used to translate the text to the target language
module.exports = translateText;
