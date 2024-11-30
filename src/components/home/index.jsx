import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaCopy, FaCoffee } from 'react-icons/fa';

const HomePage = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-lg bg-gray-900/70 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">PG</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hidden sm:block">
              Password Generator
            </h1>
          </div>

          <a
            href="https://buymeacoffee.com/aamirali65"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-xl"
          >
            <FaCoffee size={18} />
            <span className="hidden sm:block">Buy me a coffee</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Generate Secure Passwords
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Create strong, unique passwords to keep your accounts safe
            </p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
            {/* Password Display */}
            <div className="relative mb-8">
              <input
                type="text"
                value={password}
                readOnly
                placeholder="Click generate to create password"
                className="w-full p-4 md:p-5 text-lg md:text-xl font-mono border rounded-xl bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500 transition-all duration-200 pr-12"
              />
              <button
                onClick={copyToClipboard}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
                title="Copy to clipboard"
              >
                <FaCopy className="text-gray-400 group-hover:text-blue-400" />
              </button>
            </div>

            {/* Controls */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-white">Password Length</label>
                  <span className="text-blue-400 font-medium">{length} characters</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { state: includeUppercase, setState: setIncludeUppercase, label: "Uppercase Letters (A-Z)" },
                  { state: includeLowercase, setState: setIncludeLowercase, label: "Lowercase Letters (a-z)" },
                  { state: includeNumbers, setState: setIncludeNumbers, label: "Numbers (0-9)" },
                  { state: includeSymbols, setState: setIncludeSymbols, label: "Special Characters (!@#$)" }
                ].map((option, index) => (
                  <label 
                    key={index} 
                    className="flex items-center space-x-3 p-4 border border-gray-700 rounded-xl hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={option.state}
                      onChange={(e) => option.setState(e.target.checked)}
                      className="w-5 h-5 accent-blue-500 rounded"
                    />
                    <span className="text-gray-300">{option.label}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={generatePassword}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Generate Password
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/aamirali65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/aamir.develop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Password Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;