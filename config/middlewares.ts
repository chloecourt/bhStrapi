export default [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::body",
    config: {
      includeUnparsed: true,
    },
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "bad-habits.s3.eu-west-3.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob",
            "dl.airtable.com",
            "bad-habits.s3.eu-west-3.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
          "frame-ancestors": null,
        },
      },
      frameguard: false,
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
