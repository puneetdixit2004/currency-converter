import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [len, setLen] = useState(8);
  const [numb, setNumb] = useState(false);
  const [char, setChar] = useState(false);

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (char) chars += "!@#$%^&*()_+!@#$%^&*()_+";
    if (numb) chars += "01234567890123456789";
    let password = "";
    for (let i = 0; i < len; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }, [char, numb, len]);

  const [password, setPassword] = useState(generatePassword());

  const handleGenerate = () => {
    setPassword(generatePassword());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy password: ', err);
    });
  };

  const getStrength = () => {
    if (len >= 16 && char && numb) return "Strong";
    if (len >= 12 && (char || numb)) return "Medium";
    return "Weak";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Password Generator</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 text-center">Generated Password</label>
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 border rounded-lg text-white bg-grey focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
            readOnly
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleGenerate}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Generate
          </button>
          <button
            onClick={handleCopy}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 text-center">Password Length: {len}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={len}
            onChange={(e) => setLen(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setChar((prev) => !prev)}
            className={`px-4 py-2 rounded-lg font-bold ${
              char ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {char ? '✔ Special Characters' : 'Special Characters'}
          </button>
          <button
            onClick={() => setNumb((prev) => !prev)}
            className={`px-4 py-2 rounded-lg font-bold ${
              numb ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {numb ? '✔ Numbers' : 'Numbers'}
          </button>
        </div>

        <div className="text-center">
          <span
            className={`inline-block px-4 py-2 rounded-lg font-bold ${
              getStrength() === "Strong"
                ? "bg-green-500 text-white"
                : getStrength() === "Medium"
                ? "bg-yellow-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            Strength: {getStrength()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
