# trick-or-treat

Open the door and reveal a candy or ghost.

![Example](https://github.com/junior-devleague/trick-or-treat/blob/master/imgs/example.png)

## Objective

Use **Events**.

## Prerequisites

To complete this project, students should have the following:
* Beginner understanding of HTML structures (divs, attributes, images...etc.).
* Beginner understanding of JavaScript and DOM (variables, document.getElementById('id')...etc.)

## Concepts
Concepts | Description
---------|------------
Events | Events are "things" that happen to HTML elements. When JavaScript is used, JavaScript can "react" on these events.

Common Events | Description
--------------|-------------
onchange | HTML element has been changed
onclick | User clicks on HTML element
onmouseover | User moves mouse over an HTML element
onmouseout | User moves mouse away from an HTML element
onkeydown | User pushes a keyboard key
onload | Browser has finished loading the page

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
  * Open up your terminal
  * Use ```cd Documents``` to change directory into your Documents folder.
  * Click on the right "Clone or download" button and copy the link. Clone this git repository by typing in the following to the terminal: ```git clone [link] ```. (Paste the link that you just copied instead of [link])
  * Change directory into this newly cloned folder.
  * Create the following files using the ```touch file.ext``` command:
    * index.html
    * styles.css
    * app.js
  * Make sure to link your ```styles.css``` and ```app.js``` files to the ```index.html``` file.
    * Initialize your index.html file by starting with an ```!``` or ```html``` and pressing tab.
      * Before the ```<title>Document</title>```, create a ```link``` element. Set the ```href``` attribute to the name of your css file. This should look as follows:
      ``` HTML
      <link rel="stylesheet" href="styles.css">
      <title>Document</title>
      ```
      * Before the ```</body>```, create a ```script``` element and set its ```src``` attribute to the name of your js file. This should look as follows:
      ``` HTML
      <script src="app.js"></script>
      ```

### Part II HTML

To complete Part II, fulfill the following requirements:
1. Create an ```audio``` element with an ```id``` of "knock" and ```src``` to the door-knock.mp3 file. The ```src``` attribute takes the **path** to the mp3 file. Since the mp3 file is in a folder, we need to specify that by typing in the name of the folder followed by a forward slash as follows:
```html
<audio id="knock" src="sound/door-knock.mp3"></audio>
```
2. Create an ```audio```element with an ```id``` of "close" and ```src``` to the door-close.mp3 file.
3. Create an ```audio``` element with an ```id``` of "open" and ```src``` to the door-open.mp3 file.
4. Create a ```div``` with an ```id``` of "container". In this div, create the following:
  * A ```div``` with a ```class``` of "door" and ```id``` of "door1". In this div, create the following:
    * A ```div``` with a ```class``` of "knob" and ```id``` of "knob1". This should look something like:
    ``` html
    <div id="container">
      <div class="door" id="door1">
        <div class="knob" id="knob1"></div>
      </div>
      <!-- add two more of the div with class of door but change the ids to door2, knob2, door3...etc. -->
    </div>
    ```
  * Add two more of the same section. Change the ```id``` of the door and knob to ```door2```, ```knob2``` and ```door3``` and ```knob3```.

### Part III CSS

To complete Part III, fulfill the following requirements:

1. Target the ```body``` element.
  * Set its ```margin``` to 0px.
2. Target the ```id``` of "container".
  * Set its ```width``` to calc(100vw).
  * Set its ```height``` to calc(100vh).
  * Activate flexbox!
  * Use flexbox to make horizontal space around each element.
  * Use flexbox to center items vertically.
3. Target the ```class``` of "door".
  * Set its ```width``` to 50px.
  * Set its ```height``` to 100px.
  * Set its ```background-color``` to orange.
  * Activate flexbox!
  * Use flexbox to make elements at the end of the horizontal space.
  * Use flexbox to center items vertically.
  * Set the ```background-size``` to 50px. This property specifies the size of the background image we will set later.
  * Set the ```background-repeat``` to no-repeat. This property makes sure the image does not repeat itself vertically or horizontally if the image is smaller than our container.
4. Target the ```class``` of "knob".
  * Set the ```width``` to 10px.
  * Set the ```height``` to 10px.
  * Set the ```background-color``` to red.
  * Set the ```border-radius``` to 200px.
  * Set the ```margin-right``` to 10px.

### Part IV JS

To complete Part IV, fulfill the following requirements:

1. Create a ```variable``` called door1 that will store the element with an ```id``` of "door1". Use the document.getElementById('id') as follows:
``` javascript
var door1 = document.getElementById('door1');
```
2. Create a ```variable``` called door2 that will store the element with an ```id``` of "door2".
3. Create a ```variable``` called door3 that will store the element with an ```id``` of "door3".
4. Create a ```variable``` called knob1 that will store the element with an ```id``` of "knob1".
5. Create a ```variable``` called knob2 that will store the element with an ```id``` of "knob2".
6. Create a ```variable``` called knob3 that will store the element with an ```id``` of "knob3".
7. Create a ```variable``` called close that will store the element with an ```id``` of "close".
8. Create a ```variable``` called open that will store the element with an ```id``` of "open".
9. Create a ```variable``` called knock that will store the element with an ```id``` of "knock".
10. Create a ```variable``` called door1IsOpen and set it equal to ```false```.
11. Create a ```variable``` called door2IsOpen and set it equal to ```false```.
12. Create a ```variable``` called door3IsOpen and set it equal to ```false```.

13. Create a function that will respond to a ```mouseover``` event. We can do this as follows:
``` javascript
door1.onmouseover = function(){
  //How you will "react" to this mouseover event goes here.
}
```
  * When a user mouses over door1, we want the knock sound to play, only if the door is open. Thus, in this mouseover function, create an ```if statement``` that checks if door1IsOpen = false, play the knock sound. If no code within the ```else``` portion is specified, nothing will happen if door1IsOpen = true. We can do this as follows:
  ``` javascript
  door1.onmouseover = function(){

    if(door1IsOpen === false) {
      knock.play()
    } else {

    }
  }
  ```
14. Create a function that will respond to a ```click``` event. Follow the pattern that you saw previously. The ```event``` we used previously was ```mouseover```. Now, we want to react to a ```click``` event. (Hint: Use ```.onclick```)
  * When a user clicks on door1, we want the door to open with the open sound playing. This should happen only when the door is **not open yet**. Create an ```if statement``` in your click function. When door1IsOpen === false, do the following:
    * Change the ```background-color``` style property of door1 to "black". We can change CSS in javascript using the following pattern:
      * ```[element].style.[property] = ['value'];```
      ``` javascript
      door1.style.backgroundColor = "black";
      ```
    * Change the ```display``` style property of knob1 to "none".
    * Play the ```open``` sound.
    * Set door1IsOpen to ```true```.
  * **Else** if door1IsOpen is true, do the following:
    * Change the ```background-color``` style property of door1 to "orange".
    * Change the ```display``` style property of knob1 to "flex".
    * Play the ```close``` sound.
    * Set door1IsOpen to ```false```.  

15. Create the same ```mouseover``` and ```click``` functions for door2 and door3.

## Stretch Goals
1. Choose 2 doors. When the door is clicked and the door is not open yet, change the ```background-image``` style property to ```"url('folder/path-to-imagefile.jpg')"```. Set the path to the image file.
2. Add ```box-shadow``` when the user hovers over the door by using the CSS pseudo-class ```:hover```. Resource: https://www.w3schools.com/css/css_pseudo_classes.asp

## Resources
* Events: https://www.w3schools.com/js/js_events.asp
* CSS Pseudo Classes:  https://www.w3schools.com/css/css_pseudo_classes.asp
* Changing CSS Styles in JS:  https://www.w3schools.com/js/js_htmldom_css.asp
