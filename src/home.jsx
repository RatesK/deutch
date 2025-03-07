import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  // Define quiz link details for Basics 1 and Basics 2
  const basics1 = [
    { to: "/1", quizTitle: "Pronouns 1", buttonClass: "bg-blue-400 hover:bg-blue-500" },
    { to: "/2", quizTitle: "Nouns 1", buttonClass: "bg-green-400 hover:bg-green-500" },
    { to: "/3", quizTitle: "Nouns 2", buttonClass: "bg-green-400 hover:bg-green-500" },
    { to: "/4", quizTitle: "Nouns 3", buttonClass: "bg-green-400 hover:bg-green-500" },
    { to: "/5", quizTitle: "Nouns 4", buttonClass: "bg-green-400 hover:bg-green-500" },
    { to: "/6", quizTitle: "Grammar 1", buttonClass: "bg-purple-400 hover:bg-purple-500" },
    { to: "/7", quizTitle: "Grammar 2", buttonClass: "bg-purple-400 hover:bg-purple-500" },
    { to: "/8", quizTitle: "Grammar 3", buttonClass: "bg-purple-400 hover:bg-purple-500" },
    { to: "/9", quizTitle: "Grammar 4", buttonClass: "bg-purple-400 hover:bg-purple-500" },
    { to: "/10", quizTitle: "Substantive 1", buttonClass: "bg-yellow-400 hover:bg-yellow-500" },
    { to: "/11", quizTitle: "Substantive 2", buttonClass: "bg-yellow-400 hover:bg-yellow-500" }
  ];
  const basics2 = [
    { to: "/12", quizTitle: "Verbs 1", buttonClass: "bg-orange-400 hover:bg-orange-500" },
    { to: "/13", quizTitle: "Verbs 2", buttonClass: "bg-orange-400 hover:bg-orange-500" },
    { to: "/14", quizTitle: "Verbs 3", buttonClass: "bg-orange-400 hover:bg-orange-500" },
    { to: "/15", quizTitle: "Adjectives 1", buttonClass: "bg-purple-600 hover:bg-purple-700" },
    { to: "/16", quizTitle: "Adjectives 2", buttonClass: "bg-purple-600 hover:bg-purple-700" },
    { to: "/17", quizTitle: "Grammar 1", buttonClass: "bg-purple-400 hover:bg-purple-500" },
    { to: "/18", quizTitle: "Grammar 2", buttonClass: "bg-purple-400 hover:bg-purple-500" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white text-center py-4 px-2">
        <h1 className="text-2xl md:text-3xl font-bold">Deutch</h1>
        <p className="text-sm md:text-md">Words</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center bg-blue-50 px-4 py-8">
        <section className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl text-blue-700 font-semibold mb-4">Basics 1</h2>
          <p className="text-lg text-gray-700">Core nouns and pronouns</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 md:gap-6 max-w-4xl w-full">
          {basics1.map((quiz) => (
            <Link key={quiz.to} to={quiz.to} state={{ quizTitle: quiz.quizTitle }} className="w-full">
              <button className={`w-full ${quiz.buttonClass} text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base`}>
                {quiz.quizTitle}
              </button>
            </Link>
          ))}
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl text-blue-700 font-semibold mb-4">Basics 2</h2>
          <p className="text-lg text-gray-700">Core Verbs and Adjectives</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 md:gap-6 max-w-4xl w-full">
          {basics2.map((quiz) => (
            <Link key={quiz.to} to={quiz.to} state={{ quizTitle: quiz.quizTitle }} className="w-full">
              <button className={`w-full ${quiz.buttonClass} text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl transition-colors duration-300 text-sm md:text-base`}>
                {quiz.quizTitle}
              </button>
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}

export default HomePage;
