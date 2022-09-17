export const SITE = {
  name: "Numéro National d’Identification",

  origin: "https://djibidentite.org",
  basePathname: "/",

  title: "Djibouti — Numéro National d’Identification",
  description: "Djibouti vient de lancer officiellement la carte d'identité numérique qui sera désormais obligatoire pour tous les Djiboutiens.",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",
};

export const BLOG = {
  disabled: false,
  slug: "blog",

  postsWithoutBlogSlug: true,
  postsPerPage: 6,

  category: {
    disabled: false,
    slug: "category", // set empty to change from /category/some-slug to /some-slug
  },

  tag: {
    disabled: false,
    slug: "tag",
  },
};
