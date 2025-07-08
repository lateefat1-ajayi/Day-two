// import { useNavigate } from "react-router-dom";

// function SelectTest() {
//   const navigate = useNavigate();

//   const tests = [
//   "JavaScript is a versatile programming language used to build interactive web pages. HTML structures the content, CSS styles it, and JavaScript brings it to life.",

//   "Git helps developers track changes in code. Common commands include git init, git add, git commit, and git push. Version control is a key part of modern development.",

//   "Frontend development focuses on user interfaces using HTML, CSS, and JavaScript. Backend development involves servers, databases, and APIs using tools like Node.js and Express.",
// ];


//   return (
//     <div className="min-h-screen bg-blue-600 text-white flex flex-col items-center justify-center p-6">
//       <h1 className="text-2xl font-bold mb-6">Choose a Typing Test</h1>
//       <div className="space-y-4 w-full max-w-xl">
//         {tests.map((text, index) => (
//           <button
//             key={index}
//             onClick={() => navigate(`/test/${index}`)}
//             className="block w-full text-left p-4 bg-slate-700 hover:bg-slate-600 rounded shadow"
//           >
//             Test {index + 1}: <span className="text-sm text-gray-300 block mt-1">{text.slice(0, 60)}...</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SelectTest;
