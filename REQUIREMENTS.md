# Coffee Personality Quiz — Requirements

## Overview
A "What's Your Coffee Personality?" quiz. Visitors answer abstract & quirky questions and receive a personality type + coffee recommendation. Results show all personality percentages.

---

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" |
| Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| Health Nut | Oat Milk Americano | "Wellness in every sip" |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |
| Indulgent Treat | Mocha with Whip | "Coffee is dessert" |
| Social Butterfly | Cappuccino | "Coffee is better with company" |

---

## Result Display Style
**Show all percentages** — After completing the quiz, users see all 6 personalities with their percentage breakdown, plus all corresponding coffee recommendations. Example: "You're 50% Sweet Enthusiast, 30% Social Butterfly, 20% Zen Minimalist..."

---

## Visual Style
**Playful & Colorful (Style 1)**
- Bright gradient background (pink/blue/yellow pastel)
- White rounded cards with heavy border-radius (28px)
- Bold rounded font (Nunito)
- Colorful progress dots
- Fun emoji icons throughout
- Answer options with emoji icons + hover effects (lift on hover)
- High energy, fun, approachable feel

---

## Images
Skipping images for now — can add later during iteration.

---

## Icons
**Yes — emoji icons** next to each answer option.

---

## Quiz Questions

### Q1: If you were a color, which would you be?
- 🔴 Bright red — intense and bold → **Sweet Enthusiast**
- ⬜ Crisp white — pure and clean → **Zen Minimalist**
- 🟢 Leafy green — fresh and healthy → **Health Nut**
- 🟤 Warm brown — grounded and practical → **Practical Pragmatist**
- 🍫 Rich chocolate — decadent and deep → **Indulgent Treat**
- 🔵 Sky blue — open and social → **Social Butterfly**

### Q2: You're stranded on a desert island. What do you bring?
- 🔥 A flint and steel — figure it out yourself → **Zen Minimalist**
- 📖 A good book and snacks → **Indulgent Treat**
- 🏋️ Resistance bands — keep the routine going → **Health Nut**
- 📻 A radio — someone to talk to → **Social Butterfly**
- 🗺️ A survival guide — practical thinking → **Practical Pragmatist**
- 🍬 A bag of candy — priorities → **Sweet Enthusiast**

### Q3: It's Sunday morning. What does your ideal morning look like?
- 🧘 Quiet meditation and journaling → **Zen Minimalist**
- 🥑 Smoothie bowl and a workout → **Health Nut**
- 🥞 Massive brunch with friends → **Social Butterfly**
- 🛋️ Pajamas until noon, total relaxation → **Indulgent Treat**
- 📋 Catch up on emails and plan the week → **Practical Pragmatist**
- 🎉 Spontaneous plans, see what happens → **Sweet Enthusiast**

### Q4: Pick a superpower:
- 🧠 Mind reading — understand everyone → **Social Butterfly**
- ⚡ Super speed — maximum efficiency → **Practical Pragmatist**
- 🌿 Healing touch — help others feel better → **Health Nut**
- 🔮 See the future — always prepared → **Zen Minimalist**
- 🍕 Conjure any food instantly → **Indulgent Treat**
- 🌈 Control the weather — keep things exciting → **Sweet Enthusiast**

### Q5: How do you make a big decision?
- 📊 Spreadsheet, pros and cons list → **Practical Pragmatist**
- 🤔 Sit with it quietly until it feels right → **Zen Minimalist**
- 👥 Ask everyone you know for opinions → **Social Butterfly**
- 🎲 Go with your gut, life's an adventure → **Sweet Enthusiast**
- ✅ Research the healthiest/best option → **Health Nut**
- 😴 Sleep on it... and then sleep on it again → **Indulgent Treat**

### Q6: What's your spirit animal?
- 🦁 Lion — bold and confident → **Sweet Enthusiast**
- 🐢 Tortoise — slow, steady, wise → **Zen Minimalist**
- 🐬 Dolphin — playful and social → **Social Butterfly**
- 🦅 Eagle — sharp and focused → **Practical Pragmatist**
- 🐝 Bee — healthy, productive, purposeful → **Health Nut**
- 🐻 Bear — cozy, indulgent hibernator → **Indulgent Treat**

### Q7: You find $20 in an old jacket. You:
- 🥗 Buy a healthy lunch → **Health Nut**
- ☕ Grab coffee and sit somewhere peaceful → **Zen Minimalist**
- 🎂 Treat yourself to something delicious → **Indulgent Treat**
- 🎁 Split it with a friend → **Social Butterfly**
- 💼 Put it back in your wallet — it was already budgeted → **Practical Pragmatist**
- 🎡 Spend it on something spontaneous and fun → **Sweet Enthusiast**

---

## Scoring Logic
Each answer maps to one personality. At the end, tally all answers and show percentage breakdown for all 6 personalities, with their coffee recommendations listed in order from highest to lowest score.
