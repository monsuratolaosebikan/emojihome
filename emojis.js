module.exports = {
  smsEmo : {
    "💡": {func: "turnOnLights", on:false},
    "📺": {func: "turnOnTV", on:false},
    "🚽" : {func: "flushToilet", on:false},
    "🔒": {func: "lockDoor", on: false},
    "🔔": {func: "doorBell"},
    "📻": {func: "turnOnBoomBox"},
    "▶️": {func: "playMusic"},
    "🍕": {func: "orderPizza"},
    "👍": {func: "confirmAction"}
  },
  
  mmsEmo : {
    "🕵🏻": {func: "spyCamImage"},
    "🕵️️": {func: "spyCamImage"},
    "🕵️": {func: "spyCamImage"}
  },
    
  rooms : {
      "🛏": {func: "bedroomLight", on:false},
      "🛋": {func: "livingRoomLight", on:false},
      "🍽": {func: "kitchenLight", on:false},
      "🛀": {func: "bathroomLight", on:false}
  }
};