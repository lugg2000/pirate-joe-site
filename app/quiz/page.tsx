"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { crew, CrewKey, crewList } from "@/lib/crew";
import { questions } from "@/lib/quiz-questions";

type Scores = Record<CrewKey, number>;

const emptyScores: Scores = {
  joe: 0,
  bob: 0,
  jane: 0,
  alan: 0,
  mike: 0,
  ian: 0,
  penelope: 0,
  pai: 0,
};

const crewKeys = Object.keys(emptyScores) as CrewKey[];

function getTopResult(scores: Scores): CrewKey {
  let topKey: CrewKey = "joe";
  let topScore = -Infinity;
  (Object.keys(scores) as CrewKey[]).forEach((key) => {
    if (scores[key] > topScore) {
      topScore = scores[key];
      topKey = key;
    }
  });
  return topKey;
}

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSharedResult = (() => {
    const shared = searchParams.get("result");
    return shared && crewKeys.includes(shared as CrewKey)
      ? (shared as CrewKey)
      : null;
  })();

  const [stage, setStage] = useState<"intro" | "question" | "result">(
    initialSharedResult ? "result" : "intro"
  );
  const [history, setHistory] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>(emptyScores);
  const [resultKey, setResultKey] = useState<CrewKey | null>(
    initialSharedResult
  );
  const [copied, setCopied] = useState(false);

  function startQuiz() {
    setScores(emptyScores);
    setCurrentQuestion(0);
    setHistory([]);
    setStage("question");
  }

  function selectOption(optionScores: Partial<Record<CrewKey, number>>) {
    const nextScores: Scores = { ...scores };
    (Object.keys(optionScores) as CrewKey[]).forEach((key) => {
      nextScores[key] += optionScores[key] ?? 0;
    });
    setScores(nextScores);
    setHistory([...history, currentQuestion]);

    if (currentQuestion + 1 >= questions.length) {
      const top = getTopResult(nextScores);
      setResultKey(top);
      setStage("result");
      router.replace(`/quiz?result=${top}`, { scroll: false });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function goBack() {
    if (history.length === 0) {
      // Back from the first question goes to the intro screen.
      setStage("intro");
      return;
    }
    const prevHistory = [...history];
    const prevQuestion = prevHistory.pop() as number;
    setHistory(prevHistory);
    setCurrentQuestion(prevQuestion);
  }

  function restartQuiz() {
    setStage("intro");
    setCurrentQuestion(0);
    setHistory([]);
    setScores(emptyScores);
    setResultKey(null);
    router.replace("/quiz", { scroll: false });
  }

  async function shareResult() {
    if (!resultKey) return;
    const url = `${window.location.origin}/quiz?result=${resultKey}`;
    const shareData = {
      title: "Which Crew Member Are You? — Pirate Joe",
      text: `I got ${result?.name} on the Pirate Joe crew quiz! Find out who you are:`,
      url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled the native share sheet; fall through to copy
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable; nothing more we can do silently
    }
  }

  const result = resultKey ? crew[resultKey] : null;
  const progress =
    stage === "question" ? (currentQuestion / questions.length) * 100 : 0;
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--navy)]">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,60,120,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,40,100,0.3) 0%, transparent 40%), linear-gradient(180deg, #0a1628 0%, #1a2744 40%, #0d3060 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-8 sm:px-8">
        <div className="mb-10 text-center">
          <div className="mb-2 text-[1.4rem] tracking-[0.5rem] opacity-70">
            ☠ ⚓ ☠
          </div>
          <h1 className="font-heading mb-2 text-[clamp(1.6rem,5vw,2.8rem)] leading-tight text-[var(--gold-light)] [text-shadow:0_0_30px_rgba(200,150,12,0.5),2px_2px_0_rgba(0,0,0,0.8)]">
            Which Crew Member
            <br />
            Are You?
          </h1>
          <p className="font-label mb-2 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(244,228,193,0.5)]">
            Pirate Joe: An Adventure in Business
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        </div>

        <div className="relative overflow-hidden rounded-lg bg-[linear-gradient(160deg,rgba(244,228,193,0.97),rgba(232,213,163,0.95))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(200,150,12,0.3)] sm:p-10">
          {stage === "intro" && (
            <div className="animate-[fadeUp_0.4s_ease_both] text-center">
              <p className="mb-6 text-[1.15rem] leading-relaxed text-[var(--ink)]">
                Every crew has a <strong>Bob</strong> who sees treasure in
                everything.
                <br />
                Every crew has a <strong>Jane</strong> who notices what
                nobody else does.
                <br />
                Every crew has an <strong>Ian</strong> who fixes things
                before they break.
                <br />
                <br />
                Which one are <em>you</em>?
              </p>

              <div className="mb-6 flex flex-wrap justify-center gap-2">
                {crewList.map((member) => (
                  <span
                    key={member.key}
                    className="font-label rounded-full bg-[var(--navy)] px-3 py-1.5 text-[0.7rem] tracking-wide text-[var(--gold-light)]"
                  >
                    {member.emoji} {member.name}
                  </span>
                ))}
              </div>

              <p className="mb-6 text-[0.95rem] opacity-80">
                9 questions. Honest answers. We&apos;ll tell you which seat on
                this ship is actually yours.
              </p>

              <button
                onClick={startQuiz}
                className="font-label mx-auto block w-full max-w-sm rounded border-2 border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-[var(--red)] to-[#a02020] px-4 py-4 text-[1rem] font-bold uppercase tracking-[0.12em] text-[var(--parchment)] shadow-[0_4px_15px_rgba(139,26,26,0.4)] transition-transform hover:-translate-y-0.5"
              >
                ⚓ &nbsp; Find Your Crew Role &nbsp; ⚓
              </button>
            </div>
          )}

          {stage === "question" && (
            <div className="animate-[fadeUp_0.4s_ease_both]">
              <div className="mb-6">
                <div className="font-label mb-2 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.1em] text-[var(--wood-light-text)]">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1 rounded px-2 py-1 -ml-2 text-[var(--wood)] transition-colors hover:bg-[rgba(92,58,30,0.1)] hover:text-[var(--ink)]"
                    aria-label="Go back to the previous question"
                  >
                    ← Back
                  </button>
                  <span>The Voyage</span>
                  <span>
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-[rgba(92,58,30,0.2)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] transition-[width] duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="font-label mb-2 text-[0.7rem] uppercase tracking-[0.15em] text-[var(--gold)]">
                Question {currentQuestion + 1}
              </div>
              <div className="mb-6 text-[1.3rem] font-semibold leading-snug text-[var(--ink)]">
                {questions[currentQuestion].text}
              </div>

              <div className="flex flex-col gap-2.5">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    key={option.text}
                    onClick={() => selectOption(option.scores)}
                    className="flex items-start gap-4 rounded border border-[rgba(92,58,30,0.2)] bg-[rgba(255,255,255,0.6)] px-4 py-3.5 text-left transition-all hover:translate-x-1 hover:border-[var(--gold)] hover:bg-[rgba(26,39,68,0.08)]"
                  >
                    <span className="font-label mt-0.5 min-w-[20px] text-[0.75rem] font-bold text-[var(--gold)]">
                      {letters[i]}
                    </span>
                    <span className="text-[1rem] leading-relaxed text-[var(--ink)]">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {stage === "result" && result && (
            <div className="animate-[fadeUp_0.4s_ease_both] text-center">
              <div className="font-label mb-2 text-[0.75rem] uppercase tracking-[0.2em] text-[var(--gold)]">
                Your crew role is…
              </div>

              <div className="relative mx-auto mb-3 aspect-square w-28 overflow-hidden rounded-full border-2 border-[var(--gold)] shadow-md">
                <Image
                  src={result.portrait}
                  alt={result.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>

              <div className="font-heading mb-1 text-[clamp(1.4rem,4vw,2rem)] text-[var(--navy)]">
                {result.name}
              </div>
              <div className="font-label mb-3 text-[0.8rem] uppercase tracking-[0.15em] text-[var(--wood-light-text)]">
                {result.resultRole}
              </div>
              <p className="mb-6 text-[1.1rem] italic leading-relaxed text-[var(--wood)]">
                &ldquo;{result.resultTagline}&rdquo;
              </p>

              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded border border-[rgba(92,58,30,0.15)] bg-[rgba(26,39,68,0.06)] p-3.5 text-left">
                  <div className="font-label mb-1 text-[0.7rem] uppercase tracking-[0.1em] text-[var(--wood-light-text)]">
                    ⚔ Greatest Strength
                  </div>
                  <div className="text-[0.95rem] font-semibold text-[var(--ink)]">
                    {result.strengths}
                  </div>
                </div>
                <div className="rounded border border-[rgba(92,58,30,0.15)] bg-[rgba(26,39,68,0.06)] p-3.5 text-left">
                  <div className="font-label mb-1 text-[0.7rem] uppercase tracking-[0.1em] text-[var(--wood-light-text)]">
                    ⚠ Watch Out For
                  </div>
                  <div className="text-[0.95rem] font-semibold text-[var(--ink)]">
                    {result.weakness}
                  </div>
                </div>
              </div>

              <div className="mb-4 whitespace-pre-line rounded border-l-4 border-[var(--gold)] bg-[rgba(255,255,255,0.5)] p-5 text-left text-[1rem] leading-[1.8] text-[var(--ink)]">
                {result.description}
              </div>

              <div className="mb-4 rounded bg-[var(--navy)] p-5 text-left text-[var(--parchment)]">
                <h4 className="font-label mb-2 text-[0.75rem] uppercase tracking-[0.1em] text-[var(--gold-light)]">
                  ⚓ In the Book
                </h4>
                <p className="text-[0.95rem] italic leading-relaxed text-[rgba(244,228,193,0.85)]">
                  {result.inBook}
                </p>
              </div>

              <div className="mx-auto my-6 h-0.5 w-16 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

              <p className="mb-2 text-[0.95rem] italic text-[var(--wood-light-text)]">
                📖 Read their full story in
              </p>
              <Link
                href="/#the-book"
                className="font-label mb-4 block rounded border-2 border-[rgba(255,255,255,0.2)] bg-gradient-to-br from-[var(--red)] to-[#a02020] px-4 py-4 text-center text-[0.95rem] font-bold uppercase tracking-[0.1em] text-[var(--parchment)] transition-transform hover:-translate-y-0.5"
              >
                Pirate Joe: Learning the Ropes — Get the Book
              </Link>

              <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
                <button
                  onClick={shareResult}
                  className="font-label rounded border border-[var(--gold)] bg-[rgba(200,150,12,0.08)] px-6 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[var(--wood)] transition-colors hover:bg-[rgba(200,150,12,0.15)]"
                >
                  {copied ? "✓ Link Copied" : "🔗 Share My Result"}
                </button>
                <button
                  onClick={restartQuiz}
                  className="font-label rounded border border-[rgba(92,58,30,0.3)] px-6 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[var(--wood)] transition-colors hover:bg-[rgba(92,58,30,0.1)]"
                >
                  ⟳ &nbsp; Take the Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="font-label mt-8 text-center text-[0.85rem] tracking-[0.1em] text-[rgba(255,255,255,0.4)]">
          A quiz from the world of{" "}
          <Link href="/" className="text-[var(--gold-light)] hover:underline">
            Pirate Joe
          </Link>{" "}
          &nbsp;•&nbsp; Book One: Learning the Ropes
        </div>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={null}>
      <QuizContent />
    </Suspense>
  );
}
