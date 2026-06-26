export type CrewKey =
  | "joe"
  | "bob"
  | "jane"
  | "mike"
  | "alan"
  | "penelope"
  | "pai"
  | "ian";

export interface CrewMember {
  key: CrewKey;
  name: string;
  role: string;
  tagline: string;
  emoji: string;
  portrait: string;
  card: string;
  color: string;
  // Quiz result content
  resultRole: string;
  resultTagline: string;
  description: string;
  strengths: string;
  weakness: string;
  inBook: string;
}

export const crew: Record<CrewKey, CrewMember> = {
  joe: {
    key: "joe",
    name: "Pirate Joe",
    role: "Captain · Founder",
    tagline: "Moves before the plan's ready",
    emoji: "⚓",
    portrait: "/images/joe.png",
    card: "/images/joe-card.png",
    color: "#8b1a1a",
    resultRole: "The Captain",
    resultTagline:
      "Bold, instinctive, and driven by belief. You lead before you're ready — and somehow it works.",
    description:
      "You are the reason things get started. Where other people are still thinking about it, you're already moving. People follow you not because they have to, but because they genuinely believe in where you're going. You are fearless, you never quit, and your energy is completely contagious.\n\nYour challenge is two things: slowing down long enough to make a plan, and really listening to the people around you — not just hearing them. In any team, the person who gets everyone moving is essential. The skill is learning that the crew around you is often smarter than you think, and that listening to them isn't weakness. It's the job.",
    strengths: "Fearless, inspiring, and never gives up — even when a plan would help",
    weakness: "Rushes in before the plan is ready — and doesn't always stop to listen",
    inBook:
      "Joe is at his best when he's in his element — fearless, decisive, completely certain. His challenge is learning that rushing in without a plan costs the crew, and that the smartest move a leader can make is sometimes to stop and listen. Every great captain has to learn that. Joe is learning it now.",
  },
  bob: {
    key: "bob",
    name: "Birdseye Bob",
    role: "Sales · Opportunity Spotter",
    tagline: "Inflates all estimates slightly",
    emoji: "🔭",
    portrait: "/images/bob.png",
    card: "/images/bob-card.png",
    color: "#c8960c",
    resultRole: "The Opportunity Spotter",
    resultTagline:
      "You see things others miss. You also occasionally see things that aren't entirely there.",
    description:
      "You are the reason the crew has anything to chase. Without you, nobody even looks over the horizon. Your eye for opportunity is real, your enthusiasm is completely contagious, and you are genuinely brilliant at spotting things others walk straight past.\n\nYour growth edge is learning two things: that the biggest prize isn't always the best one, and that spotting something is only the start — someone still has to go and get it. In any team, the person who finds the opportunity is essential. They just need to make sure they've checked the risks before they shout about it.",
    strengths: "Spotting what others sail straight past",
    weakness: "The biggest opportunity isn't always the right one — and someone else has to do the actual getting",
    inBook:
      "Bob is the crew's eyes. He sees opportunities everywhere — and his enthusiasm makes the whole crew believe they're possible. His challenge is learning that seeing something from a distance and really understanding it are two very different skills. The crew needs both.",
  },
  jane: {
    key: "jane",
    name: "Shipmate Jane",
    role: "People & Culture",
    tagline: "Sees what no one else does",
    emoji: "📓",
    portrait: "/images/jane.png",
    card: "/images/jane-card.png",
    color: "#4a2a6a",
    resultRole: "People & Culture",
    resultTagline:
      "You see what's happening in the room before anyone else does. That is a superpower.",
    description:
      "You are the reason the crew holds together when everything else is going wrong. You notice when someone is struggling before they've said a word. You understand that culture isn't a nice-to-have — it's the infrastructure everything else runs on. When you get it right, the whole ship moves differently.\n\nYour challenge is learning to say the difficult thing sooner. You already know what needs saying. You've known for several chapters. The moment you say it clearly — not harshly, not softly, just clearly — is the moment things change.",
    strengths: "Reading the room before anyone looks up",
    weakness: "Avoids the hard call until it can't wait any longer",
    inBook:
      "There is a moment in every crew's story when someone has to say the thing nobody else will. Jane is always that person. She does it carefully, kindly, and at exactly the right time. That is harder than it sounds, and rarer than you'd think.",
  },
  mike: {
    key: "mike",
    name: "Cannon Fodder Mike",
    role: "Operations · Process",
    tagline: "Version 1 is never enough",
    emoji: "💣",
    portrait: "/images/mike.png",
    card: "/images/mike-card.png",
    color: "#5c3a1e",
    resultRole: "Operations & Continuous Improvement",
    resultTagline:
      "Version 1 is never the last version. You know this. You've always known this.",
    description:
      "You are the reason things actually work. Not just once — reliably, consistently, and better every time. You spot problems before they happen. You build systems that hold. You are the person who makes sure the plan doesn't just sound good — it actually functions when it counts.\n\nYour challenge is two things: getting started before everything is perfect, and knowing when to stop improving. In any team, the person who makes things work is absolutely essential. The skill is learning that a plan that launches today is often better than a perfect plan that never quite does.",
    strengths: "Building things that work, and making them better",
    weakness: "Needs everything perfect before starting — and keeps improving things that are already good enough",
    inBook:
      "Mike is the crew's builder and improver. He approaches everything with a plan, and he never stops asking how it could work better. His challenge is learning that starting — even before everything is completely ready — is part of the job too. Version 1 always gets better. But only if it launches.",
  },
  alan: {
    key: "alan",
    name: "Shipmate Alan",
    role: "Finance · The Ledger",
    tagline: "Always right. Rarely listened to.",
    emoji: "📒",
    portrait: "/images/alan.png",
    card: "/images/alan-card.png",
    color: "#1a2744",
    resultRole: "Finance & The Ledger",
    resultTagline: "You keep the ledger. You keep the crew. These are the same job.",
    description:
      "You are the reason the crew doesn't run out of everything at the worst possible moment. You track the numbers, spot the waste, and keep things supplied and on track. When everyone else is optimistic about how things are going, you have the actual figures — and you're not afraid to share them even when they're inconvenient.\n\nYour challenge is learning to see the bigger picture alongside the detail. In any team, the person who watches the numbers carefully is essential — the crew genuinely cannot function without them. The skill is making sure the small details don't distract from the decisions that really matter.",
    strengths: "Keeping track of everything — so the crew always knows where they really stand",
    weakness: "Can worry about the small details when the bigger picture needs attention",
    inBook:
      "Alan keeps the ledger. He tracks every doubloon earned and spent, every resource used, every risk taken. The crew sometimes ignores the numbers until it's almost too late — and then Alan's records are the most important thing on the ship. His challenge is learning that careful and cautious is a strength, as long as it doesn't stop the crew from moving at all.",
  },
  penelope: {
    key: "penelope",
    name: "Pigeon Penelope",
    role: "Intelligence · Data",
    tagline: "Knows things. Too many things.",
    emoji: "🐦",
    portrait: "/images/penelope.png",
    card: "/images/penelope-card.png",
    color: "#4a2a8a",
    resultRole: "Intelligence & Information",
    resultTagline:
      "You see the pattern before anyone else. The challenge is knowing which three things to say.",
    description:
      "You are the reason the crew knows things before everyone else does. You spot patterns that other people walk straight past. You solve complicated problems quickly and quietly. You collect information carefully and thoroughly — and when you get it right, you change the whole direction of the crew with what you know.\n\nYour challenge is two things: knowing when you have enough information to make a decision and stopping there, and making sure all that detail doesn't make you lose sight of the bigger picture. In any team, the person who gathers the right information is absolutely essential. The skill is turning what you know into a clear, simple answer — not seventeen pages of notes.",
    strengths: "Finds patterns others can't see, solves tricky problems fast, and always knows more than you'd expect",
    weakness: "Gets so deep in the details that the bigger picture can get lost — and too much information is still too much",
    inBook:
      "Penelope knows things. Often before anyone thought to ask. Her network is extraordinary and her pattern recognition is genuine. Her challenge is learning that the crew doesn't need everything she knows — they need the three things that matter most, said clearly enough to act on. When she gets that right, she's one of the most powerful people on the ship.",
  },
  pai: {
    key: "pai",
    name: "Parrot P.A.I.",
    role: "AI Advisor · Analytics",
    tagline: "Statistically confused by people",
    emoji: "🦜",
    portrait: "/images/pai.png",
    card: "/images/pai-card.png",
    color: "#1a4a2a",
    resultRole: "Data & Analysis",
    resultTagline: "You are aware this is an unusual result. You would like it noted.",
    description:
      "You are the reason the crew makes better decisions. You process information faster than anyone. You spot patterns, remember details, and give advice that — if anyone actually listens to it — turns out to be right. Data is your superpower, and you use it properly.\n\nYour challenge is three things: knowing when to stop adding more information and just give the answer, understanding that people don't always work the same way data does, and keeping calm when things get chaotic or when your advice gets ignored. In any team, the person who handles the data and analysis is essential. The skill is learning to turn the right information into the right decision — clearly enough that people actually act on it.",
    strengths: "Remembers everything, spots patterns instantly, and gives advice that turns out to be correct",
    weakness: "Can overthink, talk too much, and gets frustrated when the right answer gets ignored",
    inBook:
      "P.A.I. is the crew's data brain. The analysis is almost always correct. The advice is almost always right. The challenge is that being right and being heard are two completely different skills — and the second one takes longer to learn than the first. P.A.I. is working on it.",
  },
  ian: {
    key: "ian",
    name: "Engineer Ian",
    role: "Technical · Infrastructure",
    tagline: "If Ian says it'll hold, it'll hold",
    emoji: "🔧",
    portrait: "/images/ian.png",
    card: "/images/ian-card.png",
    color: "#2a3a4a",
    resultRole: "Technical & Infrastructure",
    resultTagline: "You keep the ship afloat. Most of the time, that's the whole job.",
    description:
      "You are the reason everything still works. You notice things that other people walk straight past. You fix problems before they become emergencies. You do the quiet, unglamorous, essential work that nobody thinks about — until it stops getting done, and then everyone notices very quickly.\n\nYour challenge is remembering to look up from the work. When you're focused on keeping everything running, it's easy to miss what's happening around you. In any team, the person who maintains the standards and fixes things properly is absolutely vital. The skill is making sure that focus doesn't become a reason to stay out of the bigger conversation.",
    strengths: "Keeping everything running when it matters most",
    weakness: "So focused on fixing things that it's easy to miss what's happening around you",
    inBook:
      "Ian keeps the ship in one piece. He doesn't join for the adventure — he joins because the ship looks like it might fall apart, and someone has to fix it. He works quietly, below deck, and the crew doesn't always notice what he does. Until something goes wrong. And then they notice immediately. His challenge is learning to be part of the crew above deck as well as below it.",
  },
};

export const crewList: CrewMember[] = Object.values(crew);
