Usage
========
Start your ar drone 2.0 and connect to it via wlan. Then run node lookaround.js and open up localhost:3015 in your browser.
Click the "takeoff" button so start. Click & hold the different buttons to perform the actions. If you release a button the drone should stop its movement.

If something goes wrong click "land".

There is a second interface open localhost:3015/remote2 to use it. It has a gray area. Point your  mouse to the center of it and press "s" on your keyboard to start. "l" or ESC is for landing. Move your  mouse to move your drone front/back/left/right. Press the up/down arrow keys on your keyboard to get your drone to move up or down. Press the left or right arrow key to turn your drone.


Description
=========
This project uses felixge's node-ar-drone module ( https://github.com/felixge/node-ar-drone ) and websockets/faye to let you remote control your ar drone 2.0 via your browser.

This is just an experiment to play around with node and the ar drone


TODO
=========
- Better code & documentation.
- use a logarithmic scale for the mouse movement (it's to fast now)
- experiment with different interfaces (keyboard only maybe?)
- make an interface where the mouse-move area is shaped like the room and with a known start position you can tell your drone exactly where to move in the room....
- make a game out of it (like a tug war, to teams against each other, they fight to move the drone to the other team...)



Thanks to felixge for his work on node-ar-drone!

