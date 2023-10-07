// Install the live-server npm package globally if you haven't already: npm install -g live-server
//
// npm install live-server --save-dev
//

const liveServer = require("live-server");

const params = {
  port: 4321, // Change to your desired port
  root: "./dist", // Change to your project's root directory
  file: "index.html", // Change to your entry HTML file
  mount: [["/course", "./dist"]], // Define a custom route /blog to serve from the dist directory
  wait: 1000, // Delay in milliseconds before opening the browser
};

liveServer.start(params);
