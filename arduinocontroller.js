var five = require("johnny-five");
var board = new five.Board();
var leds = null;
//var bedroomLight = null;
board.on("ready", function() {
  //var ledPins = [2,3,4,5,6,7,8,9];
    var ledPins = [9,10,11,12]; // [bedroom, kitchen, bathroom, living room]
  leds = new five.Leds(ledPins);
    //var led = new five.Led(11);

  function oneAfterAnother() {
    var delay = 1;
    board.counter = 0;
    for (var i = 0; i < leds.length; i++) {
      var led = leds[i];

      board.wait(delay,function(){
        console.log(this.counter + " on")
        leds[this.counter].on();
      })
      board.wait(delay + 200,function(){
        console.log(this.counter + " off")
        leds[this.counter].off();
        this.counter = (this.counter + 1) % leds.length;
      })
      delay += 500;
    }
  }
    


});

function bedroomLight() {
    board.wait(1, function() {
        leds[0].toggle();
    })
}
    
function livingRoomLight() {
    board.wait(1, function() {
        leds[3].toggle();
    })
}
    
/*function TV() {
    board.wait(1, function() {
        leds[2].toggle();
    })
}*/
    
function bathroomLight() {
    board.wait(1, function() {
        leds[2].toggle();
    })
}
    
function kitchenLight() {
    board.wait(1, function() {
        leds[1].toggle();
    })
}

module.exports = {
    "bedroomLight" : bedroomLight,
    "livingRoomLight" : livingRoomLight,
    //"TV" : TV,
    "bathroomLight" : bathroomLight,
    "kitchenLight" : kitchenLight
};

