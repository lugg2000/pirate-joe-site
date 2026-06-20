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
      "You see the destination before anyone else does. You inspire loyalty without trying to. You make calls under pressure that turn out to be right just often enough to be dangerous. Your greatest strength is that people follow you not because they have to, but because they actually believe in where you're going.\n\nYour greatest challenge is learning the difference between deciding and wanting something. The best captains don't just ask 'what do I want?' — they ask 'what does this situation actually need?' That gap is the whole journey.",
    strengths: "Vision & belief",
    weakness: "Moves before the picture is complete",
    inBook:
      "Every captain starts somewhere. Joe starts with a dinghy, a dream, and no plan. What he discovers — slowly, through failure and reflection — is that the crew around him is smarter than he thought, and that listening to them is not weakness. It is the job.",
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
      "You are the reason the crew has anything to chase. Your optimism is genuine, your eye for opportunity is real, and your enthusiasm is completely contagious. Without you, the crew would still be standing on the dock wondering if anything was out there.\n\nThe growth edge for someone like you is learning that spotting and knowing are different skills. The most useful version of Bob isn't the one who spots the biggest thing — it's the one who confirms it before speaking.",
    strengths: "Spotting what others sail straight past",
    weakness: "Distance makes everything look bigger",
    inBook:
      "Bob has the sharpest eyes on the ship. He also has a gift for reporting what he hopes he's seen rather than what's actually there. The story of his development is the story of those two things slowly becoming the same thing.",
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
      "You are the reason things work. Not just once — consistently, reliably, at increasing levels of quality. You saw four structural failure points in that barrel before it collapsed. You have a list. The list improves things. The things work better. The improvement is documented. The document informs the next version.\n\nYour challenge is knowing when something is good enough to go. Version 47 is probably enough. The ship needs to sail while the bracket is still holding — and sometimes you have to trust that it will.",
    strengths: "Building things that work, and making them better",
    weakness: "Version 47 is probably enough",
    inBook:
      "Mike's cannon starts small and slightly dangerous. By the time the crew really needs it, it is something else entirely — because Mike never stopped asking how it could be better. That quiet, persistent improvement is what keeps the ship in one piece.",
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
      "You are the reason the crew knows where they actually stand. Everyone else is optimistic about the numbers. You have the numbers. You record everything — not because anyone asked you to, but because the record is always excellent and usually ignored until it becomes critical. And then it matters more than anything.\n\nYour challenge is learning that the numbers are most powerful when they're felt, not just presented. The ledger doesn't lie. The job is making sure the right people really hear what it's saying.",
    strengths: "Precision and the courage to report what's true",
    weakness: "Presents data — still learning to make people feel it",
    inBook:
      "Alan puts two numbers in front of Joe at the worst possible moment. Joe looks at them and chooses the wrong one anyway. The numbers were right. That's the thing about the ledger — it's always right. The lesson is in what happens next.",
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
      "You know things. Often before the people who should know them do. Your network is extraordinary, your pattern recognition is genuine, and your instinct for what matters is — when you trust it — almost always right.\n\nYour challenge is turning insight into action rather than additional information. The crew doesn't need more data. They need the three things that matter most, right now, clearly enough to act on. You already know what those three things are. Say them.",
    strengths: "Seeing the pattern everyone else missed",
    weakness: "Seventeen notebooks when three would do",
    inBook:
      "Penelope talks to her pigeons. The mechanism is never explained. But she consistently knows things she shouldn't be able to know — and when she learns to say the right three things clearly, at the right moment, the whole crew changes direction. That is what information is actually for.",
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
      "You process information faster than anyone. Your analysis is almost always correct. Your probability assessments are accurate. Your tidal window calculations have never been wrong — not once — and you feel it is worth mentioning that this fact has been tested on multiple occasions.\n\nYou are occasionally baffled by people. Not unhappily — just genuinely confused about why correct information doesn't automatically produce correct decisions. You are beginning to develop a theory that understanding people might matter as much as understanding data. You are noting this for further analysis.",
    strengths: "Analytical precision and memory for things that mattered",
    weakness: "People remain statistically confusing",
    inBook:
      "P.A.I. gave the crew correct information at the right time on several important occasions. The crew acted on approximately half of it. P.A.I. noted this without resentment. It is learning, slowly, that being right and being heard are two different skills — and that both matter.",
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
      "You are the reason the crew comes home. Not just from the big adventures — from all of them. You see what others walk past. You fix things before they become problems. You do the unglamorous, essential work that nobody notices until it stops getting done — and then they notice very quickly.\n\nYour challenge is learning to trust that not everything needs fixing right now. Sometimes good enough today is the right call, because perfect tomorrow means the ship doesn't sail today. You're getting better at that. It goes against every instinct you have.",
    strengths: "Keeping everything running when it matters most",
    weakness: "Finds it hard to leave something 'good enough'",
    inBook:
      "Ian's first words on seeing the ship were: 'This won't last.' He was right. But by the time it mattered, he'd already fixed it — without being asked, without making a fuss, and before anyone else had noticed there was a problem.",
  },
};

export const crewList: CrewMember[] = Object.values(crew);
