// pages/Result.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Result() {
    const { state } = useLocation();
    const navigate = useNavigate();

    // Redirect to home if result state is missing
    useEffect(() => {
        if (!state) navigate("/");
    }, [state, navigate]);

    if (!state) return null;

    const { wpm, accuracy, time, charsTyped } = state;

    return (
        <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-blue-700 p-6 rounded-lg shadow text-center">
                <h2 className="text-2xl font-bold mb-4">Your Typing Results</h2>

                <div className="text-lg space-y-3 mb-6">
                    <p>⌨️ <strong>WPM:</strong> {wpm}</p>
                    <p>🎯 <strong>Accuracy:</strong> {accuracy}%</p>
                    <p>⏱️ <strong>Time Taken:</strong> {time}s</p>
                    <p>📝 <strong>Characters Typed:</strong> {charsTyped}</p>

                    {time <= 90 && (
                        <p className="text-green-600 font-semibold mt-4 bg-white rounded-md">
                            🎉 Congratulations! You completed the test in great time.
                        </p>
                    )}
                </div>


                <button
                    onClick={() => navigate("/")}
                    className=" bg-rose-500 p-2 hover:bg-rose-600 text-white py-2 rounded font-semibold transition hover:-translate-y-1.5"
                >
                    Try Another Test
                </button>
            </div>
        </div>
    );
}

export default Result;
