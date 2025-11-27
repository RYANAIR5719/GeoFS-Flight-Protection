# GeoFS-Flight-Protection
This add-on essentially prompts the user to click "OK" to confirm their actions every time they press the [TAB] (which teleports them to the location of the camera) or [V] (which opens replay mode and can cause the location of the aircraft to shift forward after exiting it) key to protect any interference with their flight.
## How to Use This Add-on?
There are two ways to do this. One of them is easy but is quite annoying, while the other one is complicated but only needs to be done once.
### Method 1: JavaScript Console
This method is pretty simple, but requires the code to be manually pasted into the console every time you open the simulator.
1. Open the Inspect Panel of your browser by either using a keybaord shortcut, or right-clicking anywhere on the webpage and choosing the "Inspect" or "Inspect Element" button.
2. Navigate to the JavaScript console, and paste [userscript.js](https://raw.githubusercontent.com/RYANAIR5719/GeoFS-Flight-Protection/refs/heads/main/userscript.js) into the console. You may have to type `allow pasting` into the console before pasting the code.

### Method 2. TamperMonkey
This method is a little complex, but is only needed to be done once. After that, the add-on should work automatically.
1. Install the **Tampermonkey** extension on your browser.
2. Click on the extension. Then click the "Create a new script..." button.
3. Paste [userscript.js](https://raw.githubusercontent.com/RYANAIR5719/GeoFS-Flight-Protection/refs/heads/main/userscript.js) into the text box on the page, then save the file on to the extension.
4. Open GeoFS. The add-on should automatically work from now on, with no further actions required.
