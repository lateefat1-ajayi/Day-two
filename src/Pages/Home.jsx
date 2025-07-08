// pages/Home.jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl border border-blue-400 bg-white text-black p-2 rounded-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">TypeTrack</h1>
        <p className="text-lg text-black mb-6">
        Welcome to <strong>TypeTrack</strong> — an interactive typing speed test built to help junior developers improve their keyboard fluency while learning essential tech concepts.
        </p>
        
        <button
          onClick={() => navigate("/select")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition duration-200 hover:-translate-y-1.5"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}

export default Home;
