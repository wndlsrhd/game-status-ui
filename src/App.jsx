// --- src/App.jsx ---
import React, { useState } from "react";

export default function GameStatusUI() {
  const [showDetails, setShowDetails] = useState(false);
  const [quest, setQuest] = useState(null);
  const [showQuestModal, setShowQuestModal] = useState(false);

  const triggerQuest = () => {
    setQuest({
      title: "운동 30분 하기",
      description: "오늘 안에 운동을 30분 이상 해보자! 체력이 +1 상승할지도?"
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-2">🎮 상태창</h1>
      <p>이름: 주인공</p>
      <p>나이: 21</p>
      <p>체력: 10</p>
      <p>특성: 근성, 집중력</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => setShowDetails(true)}
      >
        상세정보 보기
      </button>

      {showDetails && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <h2 className="font-bold">🔍 상세정보</h2>
          <p>심리상태: 안정적</p>
          <p>최근 행동: 아침에 운동 시도함</p>
          <button
            className="mt-2 text-sm text-red-500"
            onClick={() => setShowDetails(false)}
          >
            닫기
          </button>
        </div>
      )}

      <button
        className="mt-4 px-3 py-1 bg-green-600 text-white rounded"
        onClick={triggerQuest}
      >
        퀘스트 발생시키기
      </button>

      {quest && !showQuestModal && (
        <div
          className="mt-4 p-2 bg-yellow-200 rounded cursor-pointer"
          onClick={() => setShowQuestModal(true)}
        >
          📢 새로운 퀘스트: {quest.title}
        </div>
      )}

      {showQuestModal && (
        <div className="mt-4 p-4 bg-yellow-100 rounded border">
          <h3 className="font-bold">📜 퀘스트 내용</h3>
          <p className="mb-2">{quest.description}</p>
          <button
            className="text-sm text-red-500"
            onClick={() => setShowQuestModal(false)}
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
}

// --- index.html ---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game Status UI</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// --- src/main.jsx ---
import React from "react";
import ReactDOM from "react-dom/client";
import GameStatusUI from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameStatusUI />
  </React.StrictMode>
);

// --- src/index.css ---
@tailwind base;
@tailwind components;
@tailwind utilities;

// --- package.json ---
{
  "name": "game-status-ui",
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.3.2",
    "vite": "^4.4.9"
  }
}

// --- vite.config.js ---
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

// --- tailwind.config.js ---
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
