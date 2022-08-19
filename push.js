var push = require('web-push');

let vapidKeys = {
    publicKey: 'BHtESJfPHnErQmcEDEo2LfzNMOhq91F5BIMTG2kGhvqQkag_EfVg7ClT5vJEV5S2lD-Oy8U7jr2AQuv7BuHaIdk',
    privateKey: 'gzhi-kJzlweHe0rkvCF-Se1kNYRyJoegKRJKkUR2V5U'
  }


  push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};

  push.sendNotification(sub, 'test message')