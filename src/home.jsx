import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center px-6">
      <h1 className="text-5xl font-bold text-blue-800 mb-6">Welcome Deutch (Learn or Else :3)</h1>
      <p className="text-xl text-gray-700 mb-6">Section 1:</p>
      
      <div className="grid grid-cols-2 gap-6">
        <Link to="/1">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 1 (Nouns)
          </button>
        </Link>
        <Link to="/2">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 2 (Nouns)
          </button>
        </Link>
        <Link to="/3">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 3 (Nouns)
          </button>
        </Link>
        <Link to="/4">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 4 (Nouns)
          </button>
        </Link>
        <Link to="/5">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 5 (Nouns)
          </button>
        </Link>
        <Link to="/6">
          <button className="bg-blue-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 6 (Pronouns)
          </button>
        </Link>
        <Link to="/7">
          <button className="bg-green-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 7 (Verbs)
          </button>
        </Link>
        <Link to="/7">
          <button className="bg-purple-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Learning 7 (Final)
          </button>
        </Link>
        
      </div>
      <p className="text-xl text-gray-700 mb-6 mt-8">Section 2:</p>
      
      <div className="grid grid-cols-2 gap-6">
        <Link to="/">
          <button className="bg-gray-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            Comming Soon
          </button>
        </Link>
        
      </div>
    </div>
  );
}

export default HomePage;
