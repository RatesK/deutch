import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white text-center py-4 px-2">
        <h1 className="text-2xl md:text-3xl font-bold">Deutch (Learn or Else :3)</h1>
        <p className="text-sm md:text-md">Your journey to mastering German starts here!</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center bg-blue-50 px-4 py-8">
        <section className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl text-blue-700 font-semibold mb-4">Section 1: Basics</h2>
          <p className="text-lg text-gray-700">Get started with the fundamentals of German.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 md:gap-6 max-w-4xl w-full">
          <Link to="/1" className="w-full">
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
              Pronouns 1
            </button>
          </Link>
          <Link to="/2" className="w-full">
            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
              Nouns 1
            </button>
          </Link>
          <Link to="/3" className="w-full">
            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
            Nouns 2           </button>
          </Link>
          <Link to="/4" className="w-full">
            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
            Nouns 3           </button>
          </Link>
          <Link to="/5" className="w-full">
            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
            Nouns 4            </button>
          </Link>
          <Link to="/6" className="w-full">
            <button className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
              Grammar 1
            </button>
          </Link>
          <Link to="/7" className="w-full">
            <button className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
            Grammar 2           </button>
          </Link>
          <Link to="/8" className="w-full">
            <button className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
            Grammar 3           </button>
          </Link>
          <Link to="/9" className="w-full">
            <button className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
            Grammar 4           </button>
          </Link>
          <Link to="/10" className="w-full">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
              Substantive 1
            </button>
          </Link>
          <Link to="/11" className="w-full">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
              Substantive 2
            </button>
          </Link>
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl text-blue-700 font-semibold mb-4">Section 2: Coming Soon</h2>
          <p className="text-lg text-gray-700">:3</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 max-w-4xl w-full">
          <Link to="/" className="w-full">
            <button className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base">
              Coming Soon
            </button>
          </Link>
        </div>
      </main>

    </div>
  );
}

export default HomePage;
