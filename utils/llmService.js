const OpenAI = require("openai");
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.summarizeText = async (text) => {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: `Summarize this text in 3-6 bullet points: ${text}` }]
  });
  return response.choices[0].message.content;
};