# trick-or-treat

Open the door and reveal a candy or ghost.

## Objective

Use **Events**.

## Prerequisites

To complete this project, students should have the following:
* Beginner understanding of HTML structures (divs, attributes, images...etc.).
* Beginner understanding of JavaScript and DOM (variables, document.getElementById('id')...etc.)

## Concepts
Concepts | Description
Events | Events are "things" that happen to HTML elements. When JavaScript is used, JavaScript can "react" on these events.

Common Events | Description
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
1. Create an ```audio``` element with an ```id``` of "knock" and ```src``` to the door-knock.mp3 file.
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


## Stretch Goals

## Resources
