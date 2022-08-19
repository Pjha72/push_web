var push = require('web-push')

let vapidKeys = {
  publicKey:
    "BHtESJfPHnErQmcEDEo2LfzNMOhq91F5BIMTG2kGhvqQkag_EfVg7ClT5vJEV5S2lD-Oy8U7jr2AQuv7BuHaIdk",
  privateKey: "gzhi-kJzlweHe0rkvCF-Se1kNYRyJoegKRJKkUR2V5U"
};

push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dzbDulPnARE:APA91bFNun0geSGhwZpiFR9UqFpyQTNeff51GIxvvL2BzbyBhbxIeXfBb6vGMoKZfSAQKxbB0WVKXyulDhMASDv6yvzpTQ_UMzXhSL3tq32k6PTLHkeffUcYAYFHsOIclubBuRYXksu-","expirationTime":null,"keys":{"p256dh":"BBkwCpKtglChu73KlcCi3hM9Ac-8VN09xpTy4bxJHEZOBWdLiWlWpWwF_hdVZ-HrmVzgce82-0lCIJZyFzC2Kpw","auth":"nID52nplPcXGPyiI-TDLaQ"}};

push.sendNotification(sub, "test message");