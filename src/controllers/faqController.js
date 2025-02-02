const FAQ = require("../models/FAQ");
const translateText = require("../utils/translate");
const redisClient = require("../config/redis");

exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const cacheKey = `faqs_${lang}`;
    
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) return res.json(JSON.parse(cachedData));

    const faqs = await FAQ.find();
    const translatedFAQs = await Promise.all(
      faqs.map(async (faq) => {
        if (lang === "en") return faq;
        return {
          question: faq.translations[lang]?.question || await translateText(faq.question, lang),
          answer: faq.translations[lang]?.answer || await translateText(faq.answer, lang),
        };
      })
    );

    await redisClient.set(cacheKey, JSON.stringify(translatedFAQs), { EX: 3600 });
    res.json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const [hiQuestion, hiAnswer, bnQuestion, bnAnswer] = await Promise.all([
      translateText(question, "hi"),
      translateText(answer, "hi"),
      translateText(question, "bn"),
      translateText(answer, "bn"),
    ]);

    const newFAQ = new FAQ({
      question,
      answer,
      translations: { hi: { question: hiQuestion, answer: hiAnswer }, bn: { question: bnQuestion, answer: bnAnswer } },
    });

    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ message: "Error creating FAQ", error });
  }
};
