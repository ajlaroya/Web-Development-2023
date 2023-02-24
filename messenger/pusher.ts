import ClientPusher from "pusher-js";

var Pusher = require('pusher');

export const serverPusher = new Pusher({
  appId: "1558220",
  key: "be8b3c9c9d6070413049",
  secret: "e34d963014d06cc28558",
  cluster: "ap4",
  useTLS: true,
});

export const clientPusher = new ClientPusher("be8b3c9c9d6070413049", {
  cluster: "ap4",
  forceTLS: true,
});
