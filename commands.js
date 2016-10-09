

var emoji = require('./emojis');
var arduino = require('./arduinocontroller');

module.exports =  {
  "turnOnLights": turnOnLights,
  "turnOnTV" : turnOnTV,
  "flushToilet" : flushToilet,
  "lockDoor" : lockDoor,
  "doorBell" : ringDoorBell,
  "turnOnBoomBox" : turnOnBoomBox,
  "playMusic" : playMusic,
  "orderPizza" : orderPizza,
  "confirmAction" : confirmAction,
  "spyCamImage" : spyCamImage 
};

function turnOnLights(param) {
    console.log(emoji);
    var room = emoji.rooms[param]
    var message = room.on? "Turning off the lights" : "Turning on the lights";
    room.on = !room.on;
    arduino[room.func]();
    return message;
}

function turnOnTV() {
  //document.getElementById('1 Music').play()
    var message = emoji.smsEmo['📺'].on ? "Turning off the TV" : "Turning on the TV";
    emoji.smsEmo['📺'].on = !(emoji.smsEmo['📺'].on)
    arduino["TV"]();
    return message;
}

function flushToilet() {
  return "Flushing the toilet";
}

function lockDoor() {
  return "Arming the alarm system";
}

function ringDoorBell() {
  return "Ting Tong!";
}

function turnOnBoomBox() {
  return "Boom box turning on!"
}

function playMusic() {
  return "Boom box play";
}

function orderPizza() {
  return "Should I order the regular?";
}

function confirmAction() {
  return "Done!";
}

function spyCamImage() {
  var num = Math.floor(Math.random() * 9) % 2;
  url = "";
  console.log("num " + num);
  if(num == 1)
    url = "https://randomuser.me/api/portraits/men/" + Math.floor((Math.random() * 100) + 1) + ".jpg";
  else
    url = "https://randomuser.me/api/portraits/women/" + Math.floor((Math.random() * 100) + 1) + ".jpg";
  console.log("url : " + url);
  return url;
}