import { CrewKey } from "./crew";

export interface QuizOption {
  text: string;
  scores: Partial<Record<CrewKey, number>>;
}

export interface QuizQuestion {
  text: string;
  options: QuizOption[];
}

export const questions: QuizQuestion[] = [
  {
    text: "The crew spots an opportunity. Your immediate reaction is…",
    options: [
      { text: "We're going. Who's with me?", scores: { joe: 3 } },
      {
        text: "I'm already scanning it through my telescope — it looks enormous.",
        scores: { bob: 3 },
      },
      {
        text: "Has everyone had a chance to say what they think? How's the mood?",
        scores: { jane: 3 },
      },
      {
        text: "Let me check the numbers first. How does this compare to last time?",
        scores: { alan: 3 },
      },
      {
        text: "I want to know the approach, the tides, and the risk before we move.",
        scores: { mike: 2, ian: 1 },
      },
      { text: "Give me twenty minutes. I need to send some messages.", scores: { penelope: 3 } },
    ],
  },
  {
    text: "Something goes wrong mid-operation. What do you do?",
    options: [
      {
        text: "Make a call — any call. Decisive movement beats perfect hesitation.",
        scores: { joe: 3 },
      },
      { text: "Improvise. I'll spot something useful. I always do.", scores: { bob: 2, joe: 1 } },
      {
        text: "Check in with the crew first. Who's okay? Who needs support?",
        scores: { jane: 3 },
      },
      {
        text: "Record what's happening so we can learn from it later.",
        scores: { alan: 2, mike: 1 },
      },
      { text: "Find the structural problem and fix it before it gets worse.", scores: { ian: 3 } },
      {
        text: "I already flagged this was a possibility. Let me check my notes.",
        scores: { penelope: 2, pai: 1 },
      },
    ],
  },
  {
    text: "After a failure, the crew debrief. You're most likely to say…",
    options: [
      { text: "We learned something. Let's go again.", scores: { joe: 3 } },
      {
        text: "It was still a better opportunity than the others. I stand by it.",
        scores: { bob: 3 },
      },
      { text: "How is everyone feeling? That was hard.", scores: { jane: 3 } },
      { text: "The numbers are clear. Here's what it cost and why.", scores: { alan: 3 } },
      {
        text: "I've identified four things that went wrong. Version two will fix them.",
        scores: { mike: 2, ian: 1 },
      },
      {
        text: "I had data on this. It might have gone differently if we'd used it.",
        scores: { penelope: 2, pai: 2 },
      },
    ],
  },
  {
    text: "What does a successful operation look like to you?",
    options: [
      { text: "The crew came together, we went for it, and we won.", scores: { joe: 3 } },
      { text: "We found the biggest opportunity and took it.", scores: { bob: 3 } },
      {
        text: "Everyone knew their role, felt good about it, and we celebrated properly after.",
        scores: { jane: 3 },
      },
      {
        text: "The numbers came in above forecast and every doubloon is accounted for.",
        scores: { alan: 3 },
      },
      {
        text: "The process worked exactly as designed. And I've already improved it for next time.",
        scores: { mike: 3 },
      },
      { text: "The ship held. Nothing broke. We came home.", scores: { ian: 3 } },
    ],
  },
  {
    text: "Someone on the crew is struggling. You…",
    options: [
      {
        text: "Pull them aside. Tell them what I see in them. Ask what they need.",
        scores: { joe: 2, jane: 1 },
      },
      { text: "Give them a really exciting new thing to focus on.", scores: { bob: 2 } },
      {
        text: "Notice before anyone else does and quietly make space for them.",
        scores: { jane: 3 },
      },
      { text: "Check if there's a budget or resource problem I can solve.", scores: { alan: 2 } },
      {
        text: "Make sure their responsibilities are covered so nothing falls apart.",
        scores: { ian: 2, mike: 1 },
      },
      {
        text: "Cross-reference with what I know about their previous performance patterns.",
        scores: { penelope: 2, pai: 2 },
      },
    ],
  },
  {
    text: "Your biggest professional weakness, honestly?",
    options: [
      { text: "I sometimes go before everyone's ready.", scores: { joe: 3 } },
      { text: "I overestimate what I see from a distance.", scores: { bob: 3 } },
      {
        text: "I avoid the difficult conversation until it becomes unavoidable.",
        scores: { jane: 3 },
      },
      {
        text: "I worry about small details when the big picture needs attention.",
        scores: { alan: 3 },
      },
      { text: "I keep improving things that don't need improving.", scores: { mike: 3 } },
      {
        text: "I focus so hard on keeping things running that I miss what's happening around me.",
        scores: { ian: 3 },
      },
    ],
  },
  {
    text: "How do you make decisions?",
    options: [
      {
        text: "Instinct first. Then I check if anyone has a strong reason to stop me.",
        scores: { joe: 3 },
      },
      {
        text: "I go with whatever looks biggest and most exciting from where I'm standing.",
        scores: { bob: 3 },
      },
      { text: "I read the room. People tell you everything if you listen properly.", scores: { jane: 3 } },
      {
        text: "I build a model. If the numbers work, we go. If they don't, we don't.",
        scores: { alan: 3 },
      },
      { text: "I check the process. If we don't have one, I write one first.", scores: { mike: 3 } },
      {
        text: "I gather everything I know, look for patterns, and present my findings.",
        scores: { penelope: 2, pai: 2 },
      },
    ],
  },
  {
    text: "The crew is celebrating after a big win. Where are you?",
    options: [
      {
        text: "At the centre of it — probably telling the story slightly better than it happened.",
        scores: { joe: 2, bob: 1 },
      },
      {
        text: "At the centre of it — I may have embellished the part I played somewhat.",
        scores: { bob: 3 },
      },
      {
        text: "Making sure everyone feels included and nobody gets left out.",
        scores: { jane: 3 },
      },
      { text: "Updating the ledger. The numbers won't record themselves.", scores: { alan: 3 } },
      {
        text: "Below deck. There are three things I noticed today that need addressing.",
        scores: { ian: 3 },
      },
      {
        text: "Processing the outcome data. I have updated the tracking record. Nobody asked me to. I did it anyway.",
        scores: { pai: 3 },
      },
    ],
  },
  {
    text: "Someone asks why the team works so well. You say…",
    options: [
      {
        text: "Because when it matters, everyone pulls together — and I put the right people around me.",
        scores: { joe: 3 },
      },
      { text: "Because we find the good stuff before anyone else.", scores: { bob: 3 } },
      {
        text: "Because people trust each other. That doesn't happen by accident.",
        scores: { jane: 3 },
      },
      {
        text: "Because we track the right things and make decisions based on evidence.",
        scores: { alan: 2, penelope: 1 },
      },
      {
        text: "Because we have a system, we follow it, and we improve it continuously.",
        scores: { mike: 3 },
      },
      {
        text: "I have seventeen data points on this. Shall I summarise?",
        scores: { penelope: 2, pai: 3 },
      },
    ],
  },
];
