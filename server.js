//203-642-1923
var express = require('express');
var bodyParser = require('body-parser');        
var app = express();
var commands = require('./commands');
var emojiMap = require('./emojis');


app.use(bodyParser.urlencoded({extended: false})); 

app.post("/message", function (request, response) {
    console.log(request.body.Body);
    console.log(request.body.From);
    var commandList = request.body.Body.split(' ');
    console.log(commandList);
    var replyMessage = "";
    var mms = false;
    var mediaUrl = "";
    var action = commandList[0];
    
  if (action in emojiMap.smsEmo) {
      var param = null;
      if (commandList.length > 0)
          param = commandList[1];
    var smsfunc = commands[emojiMap.smsEmo[action].func];
    msg = smsfunc(param);
    replyMessage += (msg + "\n");
  }
  else if (action in emojiMap.mmsEmo) {
    mms = true;
    var mmsfunc = commands[emojiMap.mmsEmo[action].func];
    mediaUrl = mmsfunc();
  }
  else {
    replyMessage += ("We don't support " + action + " at this time\n");
  }
    
    if (!mms) {
      console.log(replyMessage);
      response.send("<Response><Message>" + replyMessage + "</Message></Response>");
    }
    else {
      response.send("<Response><Message><Body>At your door!</Body><Media>" + mediaUrl + "</Media></Message></Response>");
    }
});


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(56706, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
