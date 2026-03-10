
const { summarizeText } = require("../utils/llmService");

exports.summarize = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text required" });
  }

  if (text.length < 5) {
    return res.status(400).json({ error: "Text too short" });
  }

  if (text.length > 10000) {
    return res.status(413).json({ error: "Text too large" });
  }

  try {
    const summary = await summarizeText(text);

    res.json({
      summary,
      model: "openai"
    });

  } catch (error) {
    console.log(error.toString());
    res.status(502).json({ error: "LLM failed" });
  }
};