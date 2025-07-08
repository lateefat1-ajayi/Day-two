import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const testTexts = [
  "JavaScript is a versatile programming language used to build interactive web pages. HTML structures the content, CSS styles it, and JavaScript brings it to life.",

  "Git helps developers track changes in code. Common commands include git init, git add, git commit, and git push. Version control is a key part of modern development.",

  "Frontend development focuses on user interfaces using HTML, CSS, and JavaScript. Backend development involves servers, databases, and APIs using tools like Node.js and Express.",
];


function Test() {
  const { id } = useParams();
  const navigate = useNavigate();
  const SAMPLE_TEXT = testTexts[id] || testTexts[0];

  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef(null);

  const handleInputChange = (e) => {
    if (!startTime) {
      const now = Date.now();
      setStartTime(now);
      intervalRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - now) / 1000));
      }, 1000);
    }

    const value = e.target.value;
    setInput(value);

    if (value.length >= SAMPLE_TEXT.length) {
      clearInterval(intervalRef.current);
      setIsFinished(true);

      const correctChars = value
        .split("")
        .filter((char, idx) => char === SAMPLE_TEXT[idx]).length;
      const accuracy = ((correctChars / SAMPLE_TEXT.length) * 100).toFixed(1);
      const wordsTyped = value.trim().split(" ").length;
      const wpm = elapsedTime > 0 ? Math.round((wordsTyped / elapsedTime) * 60) : 0;

      navigate("/result", {
        state: {
          wpm,
          accuracy,
          time: elapsedTime,
          charsTyped: value.length,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-blue-500 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Typing Test {parseInt(id) + 1}</h2>

        <p className="bg-slate-700 p-4 mb-4 rounded text-lg leading-relaxed">
          {SAMPLE_TEXT}
        </p>

        <textarea
          className="w-full p-3 rounded text-white h-32 resize-none focus:outline-none"
          placeholder="Start typing here..."
          value={input}
          onChange={handleInputChange}
          disabled={isFinished}
        />

        <div className="mt-4 flex justify-between text-sm text-white">
          <p>⏱️ Time: {elapsedTime}s</p>
          <p>⌨️ Chars: {input.length}</p>
        </div>
      </div>
    </div>
    
  );
}

export default Test;
