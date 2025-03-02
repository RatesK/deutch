import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center px-6 pb-6">
      <h1 className="text-5xl font-bold text-blue-800 my-8">Deutch (Learn or Else :3)</h1>
      <p className="text-xl text-black mb-6">Section 1:</p>
      
      <div className="grid grid-cols-2 gap-6">
        <Link to="/1">
          <button className="bg-blue-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #1-Pronouns
          </button>
        </Link>
        <Link to="/2">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #2-Nouns
          </button>
        </Link>
        <Link to="/3">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #3-Nouns
          </button>
        </Link>
        <Link to="/4">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #4-Nouns
          </button>
        </Link>
        <Link to="/5">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #5-Nouns
          </button>
        </Link>
        <Link to="/6">
          <button className="bg-purple-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #6-Grammar
          </button>
        </Link>
        <Link to="/7">
          <button className="bg-purple-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #7-Grammar
          </button>
        </Link>
        <Link to="/8">
          <button className="bg-purple-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #8-Grammar
          </button>
        </Link>
        <Link to="/9">
          <button className="bg-purple-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #9-Grammar
          </button>
        </Link>
        <Link to="/10">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #10-Substantive
          </button>
        </Link>
        <Link to="/11">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-xl transition hover:bg-amber-500">
            #11-Substantive
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
