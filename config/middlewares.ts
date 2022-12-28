export default [
  "strapi::errors",
  "strapi::security",
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefautls: true,
  //       directives: {
  //         "connect-src": ["'self'", "http:", "https:"],
  //         "img-src": [
  //           "'self'",
  //           "data:",
  //           "blob:",
  //           "bad-habits.s3.eu-west-3.amazonaws.com",
  //         ],
  //         "media-src": [
  //           "'self'",
  //           "data:",
  //           "blob",
  //           "bad-habits.s3.eu-west-3.amazonaws.com",
  //         ],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
