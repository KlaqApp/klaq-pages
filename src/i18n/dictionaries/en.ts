export const en = {
  meta: {
    title: "Klaq | Your personal watch diary",
    description:
      "Track every movie and series you watch, with progress, ratings, lists and history all beautifully kept in one app for iOS and Android.",
  },
  nav: {
    features: "Features",
    roadmap: "What's coming",
    download: "Download",
    contribute: "Support",
    home: "Home",
    skip: "Skip to content",
  },
  language: {
    label: "Language",
    switchTo: "Português",
    short: "PT",
  },
  hero: {
    eyebrow: "Your personal watch diary",
    titleLead: "Everything you watch.",
    titleAccent: "Beautifully kept.",
    subtitle:
      "Klaq keeps track of every movie and series you watch, from your progress and ratings to your full history, in an app that feels as good as the stories you love.",
    scroll: "Discover",
  },
  stores: {
    appStoreTop: "Download on the",
    appStore: "App Store",
    playStoreTop: "Get it on",
    playStore: "Google Play",
    soon: "Coming soon",
  },
  mockup: {
    rated: "You rated",
    watched: "Watched",
    season: "S",
  },
  features: {
    eyebrow: "Features",
    title: "Made for people who love what they watch.",
    subtitle: "Everything you need to remember your screen life, and nothing you don't.",
    items: {
      progress: {
        title: "Never lose your place",
        text: "Series tracked episode by episode. Klaq knows what's next, and when it airs.",
      },
      ratings: {
        title: "Rate what you watch",
        text: "Stars and notes, so you remember why you loved it (or didn't).",
      },
      watchlist: {
        title: "Want to watch",
        text: "Save anything that catches your eye. Your list is always a tap away.",
      },
      history: {
        title: "Your history, intact",
        text: "Every movie, episode and rewatch, all in a timeline of everything you've seen.",
      },
      stats: {
        title: "Your numbers",
        text: "Hours watched, favorite genres and how your year on screen is going.",
      },
      social: {
        title: "Better with friends",
        text: "Follow friends, see what they're watching and keep your profile private if you prefer.",
      },
      offline: {
        title: "Works offline",
        text: "Your library lives on your device and syncs when you're back online.",
      },
      theme: {
        title: "Make it yours",
        text: "Light or dark, with the accent color that suits you. Try it:",
      },
    },
    statsLabel: "hours this month",
    synced: "Synced",
    shareRating: "Share to socials",
    days: ["M", "T", "W", "T", "F", "S", "S"],
    historyItems: ["Movie", "Episode", "Rewatch"],
    accents: {
      mint: "Mint",
      coral: "Coral",
      spring: "Spring",
      amber: "Amber",
      green: "Green",
    },
  },
  marquee: ["Movies", "Series", "Soap operas", "Shows", "Anime", "Documentaries"],
  tour: {
    eyebrow: "Take a look",
    title: "This is Klaq. For real.",
    subtitle: "No mockups, just the actual app.",
    screens: [
      {
        title: "Home",
        text: "Your next episodes, in the right order, plus the series you're already watching.",
        image: "/screens/home.jpg",
      },
      {
        title: "Drawer",
        text: "Your whole history, neatly organized by category.",
        image: "/screens/library.jpg",
      },
      {
        title: "Timeline",
        text: "From what you've already seen to what's still coming.",
        image: "/screens/timeline.jpg",
      },
      {
        title: "Show details",
        text: "Ratings, synopsis and your episode progress, all in one place.",
        image: "/screens/show.jpg",
      },
      {
        title: "Episode details",
        text: "Mark what you've watched and jump straight to the next one.",
        image: "/screens/episode.jpg",
      },
      {
        title: "Profile",
        text: "Your stats, your people, and where everything syncs from.",
        image: "/screens/profile.jpg",
      },
    ],
  },
  roadmap: {
    eyebrow: "What's coming",
    title: "Klaq is just getting started.",
    subtitle: "Here's what we're building next.",
    badge: "Coming soon",
    items: [
      {
        title: "Books and games too",
        text: "Track everything you're into, not just movies and series.",
      },
      {
        title: "Make it yours",
        text: "Personalize your profile and pick the app theme that fits you.",
      },
      {
        title: "Custom lists",
        text: "Build your own lists for any occasion, mood or marathon.",
      },
      {
        title: "Shared lists",
        text: "Plan what to watch together with friends and family.",
      },
      {
        title: "Smart notifications",
        text: "Personalized reminders for new episodes and upcoming releases.",
      },
    ],
  },
  download: {
    eyebrow: "Download",
    title: "Your next episode is waiting.",
    subtitle: "Available for iOS and Android.",
  },
  beta: {
    title: "Not live yet?",
    subtitle: "Request access to the beta and be among the first to try Klaq.",
    cta: "Request beta access",
  },
  contribute: {
    eyebrow: "Support",
    title: "An independent app, kept going by you.",
    subtitle:
      "Klaq is an independent project. If it has become part of your routine, a contribution of any amount helps keep it running and growing.",
    cta: "Support Klaq",
    // Used when there is no donation link yet: the button opens an email instead.
    emailSubject: "Supporting Klaq",
    feedback: "Send feedback",
    cards: [
      { title: "Keeps it running", text: "Servers, database and the services Klaq relies on every day." },
      { title: "More time to build", text: "Every contribution turns into hours spent on new features and fixes." },
      { title: "Stays independent", text: "Support from the people who use Klaq keeps it focused on them." },
    ],
  },
  footer: {
    tagline: "Your personal watch diary.",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    deleteAccount: "Delete account",
    contact: "Contact",
    project: "Project",
    tmdb: "This product uses the TMDB API but is not endorsed or certified by TMDB.",
    rights: "All rights reserved.",
  },
  legal: {
    effective: "Effective September 19, 2026",
    contents: "On this page",
    backHome: "Back to home",
    backToTop: "Back to top",
    translationNotice: "",
    privacy: {
      title: "Privacy Policy",
      description: "How Klaq collects, uses and protects your personal data.",
    },
    terms: {
      title: "Terms & Conditions",
      description: "The terms that apply when you download and use Klaq.",
    },
  },
  notFound: {
    title: "This scene was cut.",
    text: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to home",
  },
};

export type Dictionary = typeof en;
