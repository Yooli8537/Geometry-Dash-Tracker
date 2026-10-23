export default {
  root: "src",
  publicDir: false,
  server: {
    port: 8577,
    proxy: {
      "/api": "http://localhost:8576", // Make sure this port matches the one in server.js
    },
    fs: {
      strict: true,
      allow: ["."],
    },
  },
};
