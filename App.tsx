import { useState, useEffect } from "react";

const CUTE_BUNNY = "data:image/jpeg;base64,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";
const DANGER_BUNNY = "data:image/jpeg;base64,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";

const TRANSITIONS = ["curtain", "wind", "crush", "origami", "peel"];

function TransitionOverlay({ type, active, onDone }) {
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(onDone, 950);
    return () => clearTimeout(t);
  }, [active]);
  if (!active) return null;

  if (type === "curtain") return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none", display: "flex" }}>
      <div style={{ width: "50%", height: "100%", background: "linear-gradient(to right,#3b0764,#7c3aed)", animation: "curtainL 0.95s cubic-bezier(.77,0,.18,1) forwards" }} />
      <div style={{ width: "50%", height: "100%", background: "linear-gradient(to left,#3b0764,#7c3aed)", animation: "curtainR 0.95s cubic-bezier(.77,0,.18,1) forwards" }} />
      <style>{`
        @keyframes curtainL{0%{transform:translateX(-100%)}40%{transform:translateX(0)}75%{transform:translateX(0)}100%{transform:translateX(-100%)}}
        @keyframes curtainR{0%{transform:translateX(100%)}40%{transform:translateX(0)}75%{transform:translateX(0)}100%{transform:translateX(100%)}}
      `}</style>
    </div>
  );

  if (type === "wind") return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none", overflow: "hidden" }}>
      {[...Array(14)].map((_, i) => (
        <div key={i} style={{
          position: "absolute", top: `${i * 7.5}%`, left: 0, width: "150%", height: "8.5%",
          background: `linear-gradient(90deg,transparent,rgba(167,139,250,${0.55 + i * 0.02}),transparent)`,
          transform: "skewY(-7deg)", animation: "windSweep 0.95s ease-in-out forwards",
          animationDelay: `${i * 0.04}s`
        }} />
      ))}
      <style>{`@keyframes windSweep{0%{transform:translateX(-130%) skewY(-7deg);opacity:1}55%{transform:translateX(0%) skewY(-7deg);opacity:1}100%{transform:translateX(130%) skewY(-7deg);opacity:0}}`}</style>
    </div>
  );

  if (type === "crush") return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "radial-gradient(circle,#fb923c,#7c2d12)", animation: "crushExpand 0.95s cubic-bezier(.22,.61,.36,1) forwards" }} />
      <style>{`@keyframes crushExpand{0%{transform:scale(0);opacity:0}25%{transform:scale(1);opacity:1}60%{transform:scale(260);opacity:1}100%{transform:scale(360);opacity:0}}`}</style>
    </div>
  );

  if (type === "origami") return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderStyle: "solid", animation: "origamiFold 0.95s ease-in-out forwards" }} />
      <style>{`@keyframes origamiFold{0%{border-width:0 0 0 0;opacity:1}45%{border-width:200vh 0 0 200vw;border-color:transparent transparent #a78bfa transparent;opacity:1}80%{border-width:200vh 0 0 200vw;border-color:transparent transparent #a78bfa transparent;opacity:1}100%{border-width:0 0 0 0;opacity:0}}`}</style>
    </div>
  );

  if (type === "peel") return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 0, height: 0, borderStyle: "solid", animation: "peelUp 0.95s cubic-bezier(.68,-.55,.27,1.55) forwards" }} />
      <style>{`@keyframes peelUp{0%{border-width:0 200vw 0 0;border-color:transparent #f472b6 transparent transparent;opacity:0}15%{opacity:1}50%{border-width:200vh 200vw 0 0;border-color:transparent #f472b6 transparent transparent;opacity:1}82%{border-width:200vh 200vw 0 0;opacity:1}100%{border-width:0 0 0 0;opacity:0}}`}</style>
    </div>
  );
  return null;
}

function FloatingHearts() {
  const items = ["💖", "✨", "🌸", "💫"];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{ position: "absolute", left: `${(i * 8.3) % 100}%`, top: `${(i * 13.7) % 100}%`, fontSize: `${1 + (i % 3) * 0.7}rem`, opacity: 0.2, animation: `floatH ${3 + (i % 4)}s ease-in-out infinite`, animationDelay: `${(i * 0.4) % 3}s` }}>
          {items[i % 4]}
        </div>
      ))}
      <style>{`@keyframes floatH{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-20px) rotate(10deg)}}`}</style>
    </div>
  );
}

function Confetti({ active }) {
  if (!active) return null;
  const colors = ["#f472b6", "#c084fc", "#fb923c", "#facc15", "#34d399", "#60a5fa"];
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 50 }}>
      {[...Array(80)].map((_, i) => (
        <div key={i} style={{ position: "absolute", left: `${(i * 1.27) % 100}%`, top: "-10px", width: 12, height: 12, borderRadius: 2, background: colors[i % colors.length], animation: `cFall ${1.5 + (i % 20) * 0.1}s ease-in forwards`, animationDelay: `${(i % 10) * 0.1}s`, transform: `rotate(${i * 23}deg)` }} />
      ))}
      <style>{`@keyframes cFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}`}</style>
    </div>
  );
}

function Stage0({ onNext }) {
  const [chosen, setChosen] = useState(null);
  const [msg, setMsg] = useState("");
  const handle = (t) => {
    setChosen(t);
    setMsg(t === "cute"
      ? "Answer toh aapka correct hai, aur bunny bhi yahi hai... par ye bunny apsy zyada cute nahi! 😉"
      : "Galat! Yeh aap nahi ho saktin, Madam. Dobara try karein! 🐰");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "0 24px", textAlign: "center", position: "relative" }}>
      <FloatingHearts />
      <div style={{ position: "relative", zIndex: 10, maxWidth: 440, width: "100%" }}>
        <div style={{ fontSize: "3.5rem", marginBottom: 16, animation: "bounce 1s infinite" }}>🧸</div>
        <h1 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#e9d5ff", marginBottom: 8, fontFamily: "Playfair Display,serif" }}>Ek Zaroori Sawal...</h1>
        <p style={{ color: "#c4b5fd", fontSize: "1.125rem", marginBottom: 32 }}>Kya aap zinda hain, <span style={{ color: "#f472b6", fontWeight: 700 }}>Madam Mahnoor?</span></p>
        <p style={{ color: "#ddd6fe", marginBottom: 24, fontSize: "0.875rem", opacity: 0.85 }}>Agar zinda hain toh <strong>Cute Bunny</strong> par click karein 👇</p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 24 }}>
          <button onClick={() => handle("cute")} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 12, borderRadius: 16, border: `2px solid ${chosen === "cute" ? "#f472b6" : "rgba(167,139,250,0.4)"}`, background: chosen === "cute" ? "rgba(244,114,182,0.2)" : "rgba(255,255,255,0.05)", cursor: "pointer", transform: chosen === "cute" ? "scale(1.1)" : "scale(1)", transition: "all 0.3s" }}>
            <img src={CUTE_BUNNY} alt="Cute Bunny" style={{ width: 96, height: 96, borderRadius: 12, objectFit: "cover", marginBottom: 8 }} />
            <span style={{ color: "#e9d5ff", fontSize: "0.75rem" }}>Cute Bunny 🐰</span>
          </button>
          <button onClick={() => handle("dangerous")} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 12, borderRadius: 16, border: `2px solid ${chosen === "dangerous" ? "#f87171" : "rgba(167,139,250,0.4)"}`, background: chosen === "dangerous" ? "rgba(248,113,113,0.2)" : "rgba(255,255,255,0.05)", cursor: "pointer", transition: "all 0.3s" }}>
            <img src={DANGER_BUNNY} alt="Dangerous Bunny" style={{ width: 96, height: 96, borderRadius: 12, objectFit: "cover", marginBottom: 8 }} />
            <span style={{ color: "#e9d5ff", fontSize: "0.75rem" }}>Dangerous Bunny 😤</span>
          </button>
        </div>
        {msg && <div style={{ padding: 16, borderRadius: 16, marginBottom: 24, fontSize: "0.875rem", border: `1px solid ${chosen === "cute" ? "rgba(244,114,182,0.4)" : "rgba(248,113,113,0.4)"}`, background: chosen === "cute" ? "rgba(244,114,182,0.2)" : "rgba(248,113,113,0.2)", color: chosen === "cute" ? "#fbcfe8" : "#fecaca" }}>{msg}</div>}
        {chosen === "cute" && <button onClick={onNext} style={{ padding: "12px 32px", background: "linear-gradient(to right,#ec4899,#a855f7)", color: "#fff", borderRadius: 9999, fontWeight: 600, border: "none", cursor: "pointer", fontSize: "1rem" }}>Acha baba, agay chalo! →</button>}
      </div>
      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>
    </div>
  );
}

function Stage1({ onNext }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "0 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 440, width: "100%" }}>
        <div style={{ fontSize: "4rem", marginBottom: 24, animation: "pulse 2s infinite" }}>🥺</div>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#92400e", marginBottom: 16, fontFamily: "Playfair Display,serif" }}>Pehle... Sorry.</h1>
        <p style={{ color: "#92400e", fontSize: "1.125rem", marginBottom: 24, lineHeight: 1.7 }}>I know I kept you waiting... and you're probably 😤 right now.</p>
        <div style={{ background: "rgba(254,243,199,0.85)", backdropFilter: "blur(8px)", border: "1px solid #fbbf24", borderRadius: 16, padding: 20, marginBottom: 32 }}>
          <p style={{ color: "#000", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.8, fontFamily: "Playfair Display,serif" }}>
            "You know I joke a lot...<br /><br />but not this time.<br /><br />I mean it this time. No punchline at the end, I promise."
          </p>
          <p style={{ color: "#b45309", fontSize: "0.75rem", marginTop: 8 }}>— woh banda jo bar bar "baad mein bataunga" kehta tha 😅</p>
        </div>
        <div style={{ fontSize: "2.5rem", marginBottom: 24 }}>🐾 🌻 🐾</div>
        <button onClick={onNext} style={{ padding: "12px 32px", background: "#f59e0b", color: "#fff", borderRadius: 9999, fontWeight: 600, border: "none", cursor: "pointer", fontSize: "1rem" }}>Next... if you're not too angry? →</button>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
    </div>
  );
}

function Stage2({ onNext }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const t = setInterval(() => setProgress(p => Math.min(p + 1, 99)), 40); return () => clearInterval(t); }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "0 24px", textAlign: "center", position: "relative" }}>
      <FloatingHearts />
      <div style={{ position: "relative", zIndex: 10, maxWidth: 440, width: "100%" }}>
        <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>🤔</div>
        <h1 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#e9d5ff", marginBottom: 8, fontFamily: "Playfair Display,serif" }}>Kuch chhupaaya...</h1>
        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 16, marginBottom: 16 }}>
          <p style={{ color: "#c4b5fd", fontSize: "0.75rem", marginBottom: 8 }}>Gathering Courage...</p>
          <div style={{ height: 12, background: "rgba(88,28,135,0.5)", borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ height: "100%", background: "linear-gradient(to right,#a855f7,#ec4899)", borderRadius: 9999, width: `${progress}%`, transition: "width 0.075s" }} />
          </div>
          <p style={{ color: "#a78bfa", fontSize: "0.75rem", marginTop: 4 }}>{progress}%</p>
        </div>
        <p style={{ color: "#ddd6fe", fontSize: "1rem", marginBottom: 24, lineHeight: 1.7 }}>I kept stalling because I didn't want to ruin what we have. <span style={{ color: "#a78bfa" }}>Fear is a strange thing.</span></p>
        <div style={{ background: "rgba(76,29,149,0.4)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 16, padding: 20, marginBottom: 32 }}>
          <p style={{ color: "#000", fontStyle: "italic", fontFamily: "Playfair Display,serif", lineHeight: 1.8 }}>
            "You kept asking.<br /><br />I kept avoiding.<br /><br />Not because I didn't care... I didn't know how to say it without messing it up. Maybe I needed to figure out what I actually felt first.<br /><br />Turns out, I did figure it out."
          </p>
          <p style={{ color: "#7c3aed", fontSize: "0.75rem", marginTop: 8 }}>— finally said it 💜</p>
        </div>
        <button onClick={onNext} style={{ padding: "12px 32px", background: "linear-gradient(to right,#7c3aed,#4338ca)", color: "#fff", borderRadius: 9999, fontWeight: 600, border: "none", cursor: "pointer", fontSize: "1rem" }}>Aur kya hai andar? →</button>
      </div>
    </div>
  );
}

function Stage3({ onNext }) {
  const memories = [
    { emoji: "💬", text: "Wo pehli baat jo kuch alag thi..." },
    { emoji: "😂", text: "Woh mazak jin pr kuch khas log hanse" },
    { emoji: "🤫", text: "Woh baat jab main kuch kehne wala tha..." },
    { emoji: "📚", text: "The time when you are teaching your students" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "0 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 440, width: "100%" }}>
        <div style={{ fontSize: "3rem", marginBottom: 16 }}>📸</div>
        <h1 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#fed7aa", marginBottom: 8, fontFamily: "Playfair Display,serif" }}>Memory Lane</h1>
        <p style={{ color: "#fdba74", marginBottom: 24, fontSize: "0.875rem" }}>From every joke to every "I'll tell you later"...</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
          {memories.map((m, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(253,186,116,0.2)", borderRadius: 16, padding: 16 }}>
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>{m.emoji}</div>
              <p style={{ color: "#fed7aa", fontSize: "0.75rem" }}>{m.text}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(124,45,18,0.3)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 16, padding: 20, marginBottom: 32 }}>
          <p style={{ color: "#000", fontStyle: "italic", fontFamily: "Playfair Display,serif", lineHeight: 1.8 }}>
            "You make ordinary things<br />feel different.<br /><br />The way you say things. The way you actually listen. The small things you probably don't even notice about yourself."
          </p>
        </div>
        <button onClick={onNext} style={{ padding: "12px 32px", background: "linear-gradient(to right,#f97316,#f43f5e)", color: "#fff", borderRadius: 9999, fontWeight: 600, border: "none", cursor: "pointer", fontSize: "1rem" }}>Sach sunne ke liye tayyar? →</button>
      </div>
    </div>
  );
}

function Stage4({ onNext }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "0 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <FloatingHearts />
      <div style={{ position: "relative", zIndex: 10, maxWidth: 440, width: "100%" }}>
        <div style={{ fontSize: "4rem", marginBottom: 16, animation: "pulse 2s infinite" }}>💖</div>
        <div style={{ fontSize: "2rem", marginBottom: 16 }}>✨ 🌸 ✨</div>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#f9a8d4", marginBottom: 8, fontFamily: "Playfair Display,serif" }}>The Truth</h1>
        <p style={{ color: "#f9a8d4", fontSize: "1rem", fontStyle: "italic", marginBottom: 20, opacity: 0.85 }}>I guess the 🌸 finally needs to know the truth today.</p>
        <div style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <p style={{ color: "#ffe4e6", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: 16 }}>
            "The truth is... I've fallen for a fairy tale — and it's you. No more jokes. No more stalling."
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", fontFamily: "Playfair Display,serif" }}>I like you... maybe more than I expected. ❤️</p>
        </div>
        <div style={{ background: "rgba(131,24,67,0.3)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <p style={{ color: "#000", fontStyle: "italic", fontFamily: "Playfair Display,serif", lineHeight: 1.9, fontSize: "0.95rem" }}>
            "Unke dekhe se jo aa jaati hai munh par raunaq,<br />Woh samajhte hain ke bimaar ka haal achha hai."
          </p>
        </div>
        <div style={{ background: "rgba(131,24,67,0.3)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: 16, padding: 20, marginBottom: 32 }}>
          <p style={{ color: "#000", fontStyle: "italic", fontFamily: "Playfair Display,serif", lineHeight: 1.9, fontSize: "0.95rem" }}>
            "Hazaron kaam hain mujh ko zamane bhar ke lekin,<br />Sirf ik yaad teri hai ke fursat hi nahi deti."
          </p>
        </div>
        <div style={{ fontSize: "2rem", marginBottom: 24 }}>🌸 💫 🌸</div>
        <button onClick={onNext} style={{ padding: "12px 32px", background: "linear-gradient(to right,#ec4899,#e11d48)", color: "#fff", borderRadius: 9999, fontWeight: 600, border: "none", cursor: "pointer", fontSize: "1rem" }}>The main question is.... →</button>
      </div>
    </div>
  );
}

function Stage5() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noClicks, setNoClicks] = useState(0);
  const [showYes, setShowYes] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [thinkUsed, setThinkUsed] = useState(false);
  const [thinkTimer, setThinkTimer] = useState(null);
  const [thinkMsg, setThinkMsg] = useState(false);
  const moveNo = () => setNoPos({ x: (Math.random() - 0.5) * 220, y: (Math.random() - 0.5) * 110 });
  const handleYes = () => { setShowYes(true); setConfetti(true); setTimeout(() => setConfetti(false), 4000); };
  const handleThink = () => {
    if (thinkUsed) return;
    setThinkUsed(true);
    setThinkMsg(true);
    const t = setTimeout(() => setThinkMsg(false), 60000);
    setThinkTimer(t);
  };
  const noMsgs = [
    "Error! Your heart doesn't agree. Try again! 😉",
    "Ek baar phir soch lo... itna bura bhi nahi hoon! 😅",
    "Error 404: 'No' option not found! 💻",
    "Arey yaar... seedha answer do na! 🥺",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "0 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <Confetti active={confetti} />
      <FloatingHearts />
      <div style={{ position: "relative", zIndex: 10, maxWidth: 440, width: "100%" }}>
        {!showYes ? (
          <>
            <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>💭</div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#e879f9", marginBottom: 12, fontFamily: "Playfair Display,serif" }}>The Big Question</h1>
            <p style={{ color: "#f0abfc", fontSize: "1.25rem", marginBottom: 4, fontWeight: 600 }}>So, can we be more than friends? 💖</p>
            <p style={{ color: "#e879f9", fontSize: "0.95rem", marginBottom: 8, opacity: 0.85 }}>Would you like to give this a chance?<br /><span style={{ color: "#d8b4fe", fontSize: "0.82rem", fontWeight: 400 }}>Whatever you feel is the right answer. There's no wrong one here.</span></p>

            <div style={{ background: "rgba(112,26,117,0.3)", border: "1px solid rgba(232,121,249,0.3)", borderRadius: 16, padding: 16, marginBottom: 32 }}>
              <p style={{ color: "#000", fontStyle: "italic", fontSize: "0.875rem", fontFamily: "Playfair Display,serif", lineHeight: 1.8 }}>
                "Hun 'Nah' na karin, kyunke 'Nah' wala button te<br />main chalne hi nahi dena!" 😄
              </p>
            </div>
            {noClicks > 0 && <div style={{ background: "rgba(127,29,29,0.3)", border: "1px solid rgba(248,113,113,0.4)", borderRadius: 12, padding: 12, marginBottom: 16, color: "#fca5a5", fontSize: "0.875rem" }}>{noMsgs[Math.min(noClicks - 1, noMsgs.length - 1)]}</div>}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center", height: 80 }}>
                <button onClick={handleYes} style={{ padding: "16px 40px", background: "linear-gradient(to right,#34d399,#14b8a6)", color: "#fff", borderRadius: 9999, fontWeight: 700, fontSize: "1.125rem", border: "none", cursor: "pointer" }}>YES! 💚</button>
                <button onMouseEnter={moveNo} onClick={() => { setNoClicks(c => c + 1); moveNo(); }} style={{ padding: "16px 40px", background: "linear-gradient(to right,#ef4444,#e11d48)", color: "#fff", borderRadius: 9999, fontWeight: 700, fontSize: "1.125rem", border: "none", cursor: "pointer", transform: `translate(${noPos.x}px,${noPos.y}px)`, transition: "transform 0.3s" }}>NO 🚫</button>
              </div>
              {!thinkUsed && (
                <button onClick={handleThink} style={{ padding: "10px 28px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(232,121,249,0.4)", color: "#e879f9", borderRadius: 9999, fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}>I need to think about it 🤔</button>
              )}
              {thinkMsg && (
                <div style={{ background: "rgba(76,29,149,0.5)", border: "1px solid rgba(167,139,250,0.5)", borderRadius: 14, padding: "12px 20px", color: "#e9d5ff", fontSize: "0.85rem", maxWidth: 300, lineHeight: 1.6 }}>
                  😶 You have <strong>one minute</strong>. Take your time... I'll be right here. No rush, no pressure.
                </div>
              )}
            </div>
            <p style={{ color: "#d946ef", fontSize: "0.75rem", opacity: 0.6 }}>(Psst... the No button has trust issues 🤫)</p>
          </>
        ) : (
          <div>
            <div style={{ fontSize: "5rem", marginBottom: 24 }}>🎉</div>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#6ee7b7", marginBottom: 16, fontFamily: "Playfair Display,serif" }}>Thank You, Mahnoor! ❤️</h1>
            <p style={{ color: "#fff", fontSize: "1.125rem", marginBottom: 24, lineHeight: 1.7 }}>You have no idea how much this means to me.<br /><span style={{ color: "#34d399" }}>Every moment was worth the wait.</span></p>
            <div style={{ background: "rgba(6,78,59,0.3)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 16, padding: 24, marginBottom: 24 }}>
              <p style={{ color: "#000", fontStyle: "italic", marginBottom: 16, fontFamily: "Playfair Display,serif", lineHeight: 1.8 }}>
                "Every joke was just a cover-up for a feeling<br />I couldn't explain.<br />I hope you can forgive my delay. ❤️"
              </p>
              <p style={{ color: "#6ee7b7", fontSize: "0.875rem", fontWeight: 600 }}>— As promised, it's Sunday. No more jokes. 🌙</p>
            </div>
            <a href="https://wa.me/?text=Yes%20Mahnoor%20reporting!" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 32px", background: "linear-gradient(to right,#10b981,#16a34a)", color: "#fff", borderRadius: 9999, fontWeight: 700, fontSize: "1.125rem", textDecoration: "none" }}>
              📲 WhatsApp: still waiting
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [pendingStage, setPendingStage] = useState(null);
  const [transType, setTransType] = useState("curtain");

  const next = () => {
    if (transitioning) return;
    const ns = Math.min(stage + 1, 5);
    setPendingStage(ns);
    setTransType(TRANSITIONS[stage % TRANSITIONS.length]);
    setTransitioning(true);
  };

  const handleDone = () => {
    if (pendingStage !== null) setStage(pendingStage);
    setPendingStage(null);
    setTransitioning(false);
  };

  const bgColors = ["#1a0a2e", "#fef3c7", "#312e81", "#7c2d12", "#1a0a2e", "#0f172a"];

  return (
    <div style={{ minHeight: "100vh", background: bgColors[stage], transition: "background 0.7s", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Nunito:wght@400;600;700&display=swap');
        *{font-family:'Nunito',sans-serif;box-sizing:border-box;}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        button{cursor:pointer;}
      `}</style>
      <div style={{ position: "fixed", top: 16, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 40 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ height: 8, borderRadius: 9999, transition: "all 0.5s", width: i === stage ? 24 : 8, background: i === stage ? "#fff" : i < stage ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)" }} />
        ))}
      </div>
      <TransitionOverlay type={transType} active={transitioning} onDone={handleDone} />
      <div key={stage} style={{ animation: "fadeInUp 0.5s ease-out both" }}>
        {stage === 0 && <Stage0 onNext={next} />}
        {stage === 1 && <Stage1 onNext={next} />}
        {stage === 2 && <Stage2 onNext={next} />}
        {stage === 3 && <Stage3 onNext={next} />}
        {stage === 4 && <Stage4 onNext={next} />}
        {stage === 5 && <Stage5 />}
      </div>
    </div>
  );
}
