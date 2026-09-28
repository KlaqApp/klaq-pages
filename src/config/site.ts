// Single place to update links once the app goes live on each store.
// An empty store URL renders the badge as "Coming soon" instead of a dead link.
export const site = {
  name: "Klaq",
  url: "https://klaq.app",
  email: "klaq@gabrielhenrique.dev",
  appStoreUrl: "",
  // Expected: https://play.google.com/store/apps/details?id=dev.gabrielhenrique.temperaturaMaxima
  playStoreUrl: "",
  // Donation page (GitHub Sponsors, Ko-fi, Apoia.se...). Empty: the support button opens an email instead.
  supportUrl: "",
  deleteAccountFormUrl: "https://forms.gle/2cM1CpHMJyY2qbqdA",
  // TODO: replace with the real beta sign-up form (e.g. a Google Form) once it exists.
  betaFormUrl: "#",
  tmdbUrl: "https://www.themoviedb.org",
  // TODO: replace with the real profile URLs once the accounts exist.
  social: {
    instagram: "#",
    x: "#",
    tiktok: "#",
  },
} as const;
