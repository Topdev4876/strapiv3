module.exports = ({ env }) => ({
  url: env('https://aqueous-journey-74266.herokuapp.com'),
  proxy: true,
  app: {
      keys: ["testKey1", "testKey2"],
  },
});
