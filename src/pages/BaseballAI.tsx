import { useState } from "react";
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: "gpt-4o-mini",
  temperature: 0.7,
});

const submit = async () => {
  const res = await fetch("/api/openai", {
    method: "POST",
    body: JSON.stringify({ prompt: text }),
  });

  const data = await res.json();
  setOutput(data.result);
};

export default function BaseballAI() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const askAI = async () => {
    const prompt = userInput || "Explain quantum computing in one sentence like I'm 10.";
    setLoading(true);

    try {
      const result = await llm.invoke(prompt);

      const text =
        result?.generations?.[0]?.[0]?.text ||
        result?.content ||
        "No response.";

      setResponse(text);
    } catch (err) {
      console.error(err);
      setResponse(`Error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    askAI();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Ask your baseball questions here!</h2><br></br>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Ask something..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ width: "300px", padding: "0.5rem" }}
        />
        <button type="submit" disabled={loading} style={{ marginLeft: "1rem" }}>
          {loading ? "Umpire meeting..." : "Ask"}
        </button>
      </form>

      <p>
        <strong>Response:</strong> {response || "..."}
      </p>
    </div>
  );
}
