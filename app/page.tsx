"use client";

import { useState } from "react";

type PersonalityKey =
  | "sweet"
  | "zen"
  | "health"
  | "practical"
  | "indulgent"
  | "social";

const personalities: Record<
  PersonalityKey,
  { name: string; coffee: string; tagline: string; emoji: string }
> = {
  sweet: {
    name: "Sweet Enthusiast",
    coffee: "Caramel Latte",
    tagline: "Life's too short for bitter",
    emoji: "🍬",
  },
  zen: {
    name: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tagline: "Simple. Clean. Perfect.",
    emoji: "🧘",
  },
  health: {
    name: "Health Nut",
    coffee: "Oat Milk Americano",
    tagline: "Wellness in every sip",
    emoji: "🌿",
  },
  practical: {
    name: "Practical Pragmatist",
    coffee: "Large Drip, Whatever's Fresh",
    tagline: "Just make it work",
    emoji: "📋",
  },
  indulgent: {
    name: "Indulgent Treat",
    coffee: "Mocha with Whip",
    tagline: "Coffee is dessert",
    emoji: "🍫",
  },
  social: {
    name: "Social Butterfly",
    coffee: "Cappuccino",
    tagline: "Coffee is better with company",
    emoji: "🦋",
  },
};

const questions: {
  text: string;
  options: { emoji: string; text: string; personality: PersonalityKey }[];
}[] = [
  {
    text: "If you were a color, which would you be?",
    options: [
      { emoji: "🔴", text: "Bright red — intense and bold", personality: "sweet" },
      { emoji: "⬜", text: "Crisp white — pure and clean", personality: "zen" },
      { emoji: "🟢", text: "Leafy green — fresh and healthy", personality: "health" },
      { emoji: "🟤", text: "Warm brown — grounded and practical", personality: "practical" },
      { emoji: "🍫", text: "Rich chocolate — decadent and deep", personality: "indulgent" },
      { emoji: "🔵", text: "Sky blue — open and social", personality: "social" },
    ],
  },
  {
    text: "You're stranded on a desert island. What do you bring?",
    options: [
      { emoji: "🔥", text: "A flint and steel — figure it out yourself", personality: "zen" },
      { emoji: "📖", text: "A good book and snacks", personality: "indulgent" },
      { emoji: "🏋️", text: "Resistance bands — keep the routine going", personality: "health" },
      { emoji: "📻", text: "A radio — someone to talk to", personality: "social" },
      { emoji: "🗺️", text: "A survival guide — practical thinking", personality: "practical" },
      { emoji: "🍬", text: "A bag of candy — priorities", personality: "sweet" },
    ],
  },
  {
    text: "It's Sunday morning. What does your ideal morning look like?",
    options: [
      { emoji: "🧘", text: "Quiet meditation and journaling", personality: "zen" },
      { emoji: "🥑", text: "Smoothie bowl and a workout", personality: "health" },
      { emoji: "🥞", text: "Massive brunch with friends", personality: "social" },
      { emoji: "🛋️", text: "Pajamas until noon, total relaxation", personality: "indulgent" },
      { emoji: "📋", text: "Catch up on emails and plan the week", personality: "practical" },
      { emoji: "🎉", text: "Spontaneous plans, see what happens", personality: "sweet" },
    ],
  },
  {
    text: "Pick a superpower:",
    options: [
      { emoji: "🧠", text: "Mind reading — understand everyone", personality: "social" },
      { emoji: "⚡", text: "Super speed — maximum efficiency", personality: "practical" },
      { emoji: "🌿", text: "Healing touch — help others feel better", personality: "health" },
      { emoji: "🔮", text: "See the future — always prepared", personality: "zen" },
      { emoji: "🍕", text: "Conjure any food instantly", personality: "indulgent" },
      { emoji: "🌈", text: "Control the weather — keep things exciting", personality: "sweet" },
    ],
  },
  {
    text: "How do you make a big decision?",
    options: [
      { emoji: "📊", text: "Spreadsheet, pros and cons list", personality: "practical" },
      { emoji: "🤔", text: "Sit with it quietly until it feels right", personality: "zen" },
      { emoji: "👥", text: "Ask everyone you know for opinions", personality: "social" },
      { emoji: "🎲", text: "Go with your gut, life's an adventure", personality: "sweet" },
      { emoji: "✅", text: "Research the healthiest/best option", personality: "health" },
      { emoji: "😴", text: "Sleep on it... and then sleep on it again", personality: "indulgent" },
    ],
  },
  {
    text: "What's your spirit animal?",
    options: [
      { emoji: "🦁", text: "Lion — bold and confident", personality: "sweet" },
      { emoji: "🐢", text: "Tortoise — slow, steady, wise", personality: "zen" },
      { emoji: "🐬", text: "Dolphin — playful and social", personality: "social" },
      { emoji: "🦅", text: "Eagle — sharp and focused", personality: "practical" },
      { emoji: "🐝", text: "Bee — healthy, productive, purposeful", personality: "health" },
      { emoji: "🐻", text: "Bear — cozy, indulgent hibernator", personality: "indulgent" },
    ],
  },
  {
    text: "You find $20 in an old jacket. You:",
    options: [
      { emoji: "🥗", text: "Buy a healthy lunch", personality: "health" },
      { emoji: "☕", text: "Grab coffee and sit somewhere peaceful", personality: "zen" },
      { emoji: "🎂", text: "Treat yourself to something delicious", personality: "indulgent" },
      { emoji: "🎁", text: "Split it with a friend", personality: "social" },
      { emoji: "💼", text: "Put it back in your wallet — it was already budgeted", personality: "practical" },
      { emoji: "🎡", text: "Spend it on something spontaneous and fun", personality: "sweet" },
    ],
  },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);
  const [showResults, setShowResults] = useState(false);

  function handleAnswer(personality: PersonalityKey) {
    const newAnswers = [...answers, personality];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      setShowResults(true);
    }
  }

  function handleRestart() {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  }

  function getResults() {
    const counts: Record<PersonalityKey, number> = {
      sweet: 0,
      zen: 0,
      health: 0,
      practical: 0,
      indulgent: 0,
      social: 0,
    };
    for (const key of answers) {
      counts[key]++;
    }
    return (Object.keys(counts) as PersonalityKey[])
      .map((key) => ({
        key,
        count: counts[key],
        percentage: Math.round((counts[key] / questions.length) * 100),
      }))
      .sort((a, b) => b.count - a.count);
  }

  // --- Intro Screen ---
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-200 to-yellow-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
          <div className="text-7xl mb-4">☕</div>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
            What&apos;s Your Coffee Personality?
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            7 quirky questions. Your perfect brew awaits.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Quiz ✨
          </button>
        </div>
      </div>
    );
  }

  // --- Results Screen ---
  if (showResults) {
    const results = getResults();
    const top = results[0];
    const topPersonality = personalities[top.key];
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-200 to-yellow-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">{topPersonality.emoji}</div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              You&apos;re a {topPersonality.name}!
            </h2>
            <p className="text-pink-500 font-semibold mt-1">
              ☕ {topPersonality.coffee}
            </p>
            <p className="text-gray-500 italic mt-1">
              &ldquo;{topPersonality.tagline}&rdquo;
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6 mb-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 text-center">
              Your Full Breakdown
            </h3>
            <div className="space-y-3">
              {results.map(({ key, percentage }) => {
                const p = personalities[key];
                return (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-700 text-sm">
                        {p.emoji} {p.name}
                      </span>
                      <span className="font-bold text-pink-500 text-sm">
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-pink-400 to-yellow-400 h-2.5 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">
                      ☕ {p.coffee} — <span className="italic">{p.tagline}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-100 rounded-2xl px-4 py-3 mb-4 text-sm text-gray-500 text-center">
            <span className="font-bold text-gray-700">Jen</span> got{" "}
            <span className="font-bold text-pink-500">🍬 Sweet Enthusiast</span>
            {" "}— Caramel Latte
          </div>

          <button
            onClick={handleRestart}
            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold text-base py-3 rounded-full shadow transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Take it Again ↺
          </button>
        </div>
      </div>
    );
  }

  // --- Question Screen ---
  const q = questions[currentQuestion];
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-200 to-yellow-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i <= currentQuestion ? "bg-pink-400" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center mb-2">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <h2 className="text-xl font-extrabold text-gray-800 text-center mb-6">
          {q.text}
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {q.options.map((option) => (
            <button
              key={option.personality}
              onClick={() => handleAnswer(option.personality)}
              className="flex items-center gap-3 border-2 border-gray-100 rounded-2xl px-4 py-3 text-left font-semibold text-gray-700 hover:border-pink-300 hover:bg-pink-50 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <span className="text-2xl">{option.emoji}</span>
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
