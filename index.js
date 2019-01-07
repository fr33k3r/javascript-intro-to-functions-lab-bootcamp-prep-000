function shout (msg) {
  return msg.toUpperCase();
}

function whisper (msg) {
  return msg.toLowerCase();
}

function logShout (msg) {
  console.log(msg.toUpperCase());
}

function logWhisper (msg) {
  console.log(msg.toLowerCase());
}

function sayHiToGrandma(msg) {
  if (msg === whisper(msg)) {
    return "I can't hear you!"
  }
  else if (msg === shout(msg)) {
    return "YES INDEED!"
  }
  else if (msg === "I love you, Grandma."){
    return "I love you, too."
  }  
}