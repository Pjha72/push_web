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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dBB_iPE75gg:APA91bFs3X7QfDnKY68suCEqnzT_ngBmdywy0qQwktFqtKv_Ux2vB-0gAVGRzC59yoqUTFCuh2qGD1zsUNrMQbVNjgYALsJTmL8QWjpVcEeXb5eoimYFYKr0dODmLaIRrdVM6OO9o3b4","expirationTime":null,"keys":{"p256dh":"BHzf-0WlAIJkXbtlF1SSPceJ7eS7grUu4Q_zJ5UhFdiNGtnUoI6XSvogV-_rLlhC1KIrzOA6pue_qrtbSYuZZRk","auth":"JtUK9Dc3-VmMg-gh8d0fig"}};

push.sendNotification(sub, "test message");