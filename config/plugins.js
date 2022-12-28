module.exports = ({ env }) => ({
  // email: {
  //   config: {
  //     provider: "sendgrid",
  //     providerOptions: {
  //       apiKey: env("SENDGRID_API_KEY"),
  //     },
  //     settings: {
  //       defaultFrom: "ilovebadhabits@gmail.com",
  //       defaultReplyTo: "ilovebadhabits@gmail.com",
  //     },
  //   },
  // },
  // ezforms: {
  //   config: {
  //     captchaProvider: {
  //       name: "none",
  //     },
  //     notificationProviders: [],
  //   },
  // },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyID: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env(AWS_REGION),
        params: {
          Bucket: env(AWS_BUCKET),
        },
      },
    },
  },
});
