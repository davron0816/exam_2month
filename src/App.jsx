import React, { useState, useEffect } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [frogPosition, setFrogPosition] = useState({ top: "50%", left: "50%" });
  const [isPlaying, setIsPlaying] = useState(true);

  // Taymer
  useEffect(() => {
    if (timeLeft > 0 && isPlaying) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [timeLeft, isPlaying]);

  // Qurbaqa bosilganda
  const handleClickFrog = () => {
    if (!isPlaying) return;
    setScore(score + 1);
    moveFrog();
  };

  // Qurbaqani random joyga ko‘chirish
  const moveFrog = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10% - 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setFrogPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 relative overflow-hidden">
      <div className="absolute top-10 right-10 text-white text-xl text-center">
        <p>Ball: {score}</p>
        <p>Vaqt: {timeLeft}s</p>
      </div>

      {isPlaying ? (
        <button
          onClick={handleClickFrog}
          className="absolute text-4xl cursor-pointer select-none"
          style={{
            top: frogPosition.top,
            left: frogPosition.left,
            transform: "translate(-50%, -50%)"
          }}
        >
          🐸
        </button>
      ) : (
        <div className="text-center text-white text-3xl">
          <p>O‘yin tugadi!</p>
          <p>Yakuniy ball: {score}</p>
          <button
            onClick={() => {
              setScore(0);
              setTimeLeft(10);
              setIsPlaying(true);
              moveFrog();
            }}
            className="mt-4 bg-white text-black px-4 py-2 rounded-lg"
          >
            Qayta boshlash
          </button>
        </div>
      )}
    </div>
  );
}
