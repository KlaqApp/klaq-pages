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
  tmdbUrl: "https://www.themoviedb.org",
} as const;
