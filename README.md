# Node.JS-Push-FCM

This a simple implemetation to Push Notification for Firebase Clould Message in Android using the lib "node-fcm" for Node.JS.

## How it works

Add the 'index.js' in your project and replace 'your_sender_ID' for your senderID.

The SenderID stay avaible in your [Firebase](https://firebase.google.com/?hl=pt-br) dashboard.

This lib have a dependence to [FCM-Node](https://github.com/jlcvp/fcm-node). Install before use. 

## How to use

Call the ```addToken()``` and pass the device token.(you can add others tokens for send a only time)

Call the  ```send()``` and pass a message in json for send. The JSON message need this format {"titulo":"This a teste", "body":"This a message in push"}

## Example

```
var push = require('./index');

push.addToken('your_token');

push.send({"titulo":"This a teste", "body":"This a message in push"});
```


## Contribute

Any pull-request and issue is more than welcome.

## License

[The MIT License (MIT) Copyright (c) 2013](http://opensource.org/licenses/MIT) 