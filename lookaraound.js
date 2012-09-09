var drone = require('ar-drone').createClient();
var Faye   = require('faye');
var eco = require("eco");
var fs  = require("fs");

var fayeServer = new Faye.NodeAdapter({mount: '/faye'});
fayeServer.listen(3333);
var express = require("express");
var server = express.createServer();
//fayeServer.attach(server);
server.configure(function() {
    return server.use(express.static(__dirname + "/public"));
  });
server.listen(3015);

drone.connect(function(err) {
  // drone.sequence() 
  //   .takeoff(5)
  //   .up(1, 0.2)
  //   //.front(1, 0.1)
  //   //.left(2, 0.2)
  //   .turn(15, 0.5)
  //   .start(function() {
  //     console.log('That was cool, time to land again!');

  //     drone.stop();
  //     drone.land();
  //   });
});

var client = new Faye.Client('http://localhost:3333/faye');
var remoteTemplate = fs.readFileSync(__dirname + "/remote.html", "utf-8");

server.get("/", function(req, res, next) {
  res.send(eco.render(remoteTemplate, {}));
});
client.subscribe('/drone/do', function(data) {
  if (data.command == "takeoff") {
    console.log("takeoff")
    drone.takeoff();
  }
  if (data.command == "front") {
    console.log("front " + data.param)
    drone.front(data.param);
  }  
  if (data.command == "back") {
    console.log("back" + data.param)
    drone.back(data.param);
  }
  if (data.command == "left") {
    console.log("left" + data.param)
    drone.left(data.param);
  }
  if (data.command == "right") {
    console.log("right" + data.param)
    drone.right(data.param);
  }
  if (data.command == "up") {
    console.log("up" + data.param)
    drone.up(data.param);
  }
  if (data.command == "down") {
    console.log("down" + data.param)
    drone.down(data.param);
  }  
  if (data.command == "stop") {
    console.log("stop");
    drone.stop();
  }   
  if (data.command == "turn") {
    console.log("turn");
    drone.turn(15, data.param);
  }   
  if (data.command == "land") {
    console.log("land")
    drone.stop();
    drone.land();
  }
});

console.log("Server running")
