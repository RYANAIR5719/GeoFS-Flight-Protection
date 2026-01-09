# <img width="30" height="30" alt="logo" src="https://github.com/user-attachments/assets/78bac03f-8808-439f-b54a-8e6ac6afa424" /> GeoFS Flight Protection
<p align="center">
    <img alt="Stars Badge" src="https://img.shields.io/github/stars/RYANAIR5719/GeoFS-Flight-Protection?style=flat-square&color=light-green">
    <img alt="Stars Badge" src="https://img.shields.io/github/watchers/RYANAIR5719/GeoFS-Flight-Protection?style=flat-square&color=light-green">
</p>

This add-on essentially prompts the user to click "OK" to confirm their actions every time they press the following keys to prevent any interference with their flight.
* Press [TAB] (teleports to the location of the camera)
* Press [V] (opens replay mode and interferes with the aircraft position after exiting)
* Press [E] (which shuts down the engines) if the aircraft is **not on the ground** AND **has the engine currently on**.
## How to Use This Add-on?
There are two ways to do this. One of them is easy but is quite annoying, while the other one is complicated but only needs to be done once.
### Method 1: JavaScript Console
1. Open the Inspect Panel of your browser by either using a keyboard shortcut or right-clicking anywhere on the webpage and choosing the "Inspect" or "Inspect Element" button.
2. Navigate to the JavaScript console, and paste [userscript.js](https://raw.githubusercontent.com/RYANAIR5719/GeoFS-Flight-Protection/refs/heads/main/userscript.js) into the console. You may have to type `allow pasting` into the console before pasting the code.
> [!IMPORTANT]
> This method requires you to manually paste the code into the console every time you launch GeoFS.

### Method 2. TamperMonkey
This method is a little complex, but it only needs to be done once. After that, the add-on should work automatically.
1. Install the **Tampermonkey** extension on your browser.
2. Click on the extension. Then click the "Create a new script..." button.
3. Paste [userscript.js](https://raw.githubusercontent.com/RYANAIR5719/GeoFS-Flight-Protection/refs/heads/main/userscript.js) into the text box on the page, then save the file onto the extension.

> [!NOTE]
> Once the script is saved in Tampermmonkey, it should automatically work every time GeoFS is launched.

## License
This project is licensed under the terms of the MIT license. For more info, see **[LICENSE.md](https://github.com/RYANAIR5719/GeoFS-Flight-Protection/blob/main/LICENSE.md)**.

## Contacts
**Discord**: ryanair4life  
**Fandom (GeoFS)**: Your Local Avgeek
