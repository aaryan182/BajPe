import React from 'react';

export const Home = () => {
  return (
    <div className="bg-emerald-200 min-h-screen flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-extrabold text-orange-600 animate-pulse drop-shadow-lg">
          Welcome to BajPe🇮🇳
        </h1>
        <p className="text-gray-700 text-2xl mt-4 drop-shadow-md">
          The easiest way to transfer money securely
        </p>
      </header>

      <div className="text-center mb-12">
        <h2 className="font-semibold text-gray-800 mb-4 text-4xl drop-shadow-xl">
          "Send your money to those friends who never return it 😂"
        </h2>
        <p className="text-gray-600 text-lg">
          Join now to be in the list of thousands of users who trust BajPe for their money transfers, even if their friends are a bit... forgetful 😆
        </p>
      </div>

      <div className="space-x-6 flex">
        <button
          className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-xl transform transition duration-300 hover:bg-blue-700 hover:scale-110 hover:shadow-2xl active:scale-95 active:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => window.location.href = "/signin"}
        >
          Sign In
        </button>
        <button
          className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-xl transform transition duration-300 hover:bg-green-700 hover:scale-110 hover:shadow-2xl active:scale-95 active:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
          onClick={() => window.location.href = "/signup"}
        >
          Sign Up
        </button>
      </div>

      <footer className="mt-12 text-gray-600">
        <p className="text-lg">&copy; 2024 BajPe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
