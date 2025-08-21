import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("BMB-XMD");
  const [font, setFont] = useState("font-sans");

  const fonts = [
    { name: "Sans", class: "font-sans" },
    { name: "Serif", class: "font-serif" },
    { name: "Mono", class: "font-mono" },
    { name: "Cursive", class: "cursive" },
    { name: "Fantasy", class: "fantasy" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6">
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-8">🎨 Fancy Font Generator</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Andika jina lako hapa..."
        className="w-full md:w-1/2 p-3 rounded-xl text-xl focus:outline-none shadow-lg"
      />

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {fonts.map((f) => (
          <button
            key={f.class}
            onClick={() => setFont(f.class)}
            className="px-4 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition"
          >
            {f.name}
          </button>
        ))}
      </div>

      <div className="mt-10 bg-white/20 p-6 rounded-2xl shadow-lg">
        <p className={`${font} text-4xl md:text-6xl text-white`}>{text}</p>
      </div>

      <style jsx global>{`
        .cursive {
          font-family: "Brush Script MT", cursive;
        }
        .fantasy {
          font-family: "Papyrus", fantasy;
        }
      `}</style>
    </div>
  );
    }
