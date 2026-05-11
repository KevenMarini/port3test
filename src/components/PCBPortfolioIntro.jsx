import { useState } from 'react';

export default function PCBPortfolioIntro() {
  const [screen, setScreen] = useState('intro');

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400">KEVEN MARINI</h1>
        <p className="mt-4 text-cyan-200">
          B.Tech Electronics & Communication Engineering · Vellore Institute of Technology
        </p>

        <button
          onClick={() => setScreen('main')}
          className="mt-8 px-8 py-4 bg-cyan-400 text-black rounded-xl"
        >
          ENTER SYSTEM
        </button>

        {screen === 'main' && (
          <div className="mt-10 text-cyan-300">
            Futuristic Portfolio Loaded Successfully
          </div>
        )}
      </div>
    </div>
  );
}
