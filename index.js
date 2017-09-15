var gcm = require('node-gcm');
var tokensAndroid = [];
var senderID = 'your_sender_ID';

class pushoModel {
  
  addToken(token) {
    tokensAndroid.push(token);
  }
  
  send(messagep){
    var msgAndroid = {'title': messagep.titulo, 'body': messagep.msg, 'icon':'ic_launcher'};

    var message = new gcm.Message({
      data: {
        key1: 'msg'
      },
      notification: msgAndroid
    });

    var sender = new gcm.Sender(senderID);
    tokensAndroid = Array.from(new Set(tokensAndroid));

    sender.sendNoRetry(message, { registrationTokens: tokensAndroid }, function(err, response) {
      if(err) console.error(err);
      else    console.log(response);
    });
  }
  
}

module.exports = new pushoModel();
