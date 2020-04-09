***WHAT IS IT***
why should you care about the DOM
a few examples
The DOM - Document Object Model - the interface between javascript and html and css (objects, methods and functions)
the DOCUMENT is the ultimate parent (THE ROOT NODE)
model objects based on each tag or atribute or element in the html
console.dir to print out the document object with all its elements
Games
--scrolling effects
--dropdown menus
--form validations
--interactivity
--animations
--every awesome site ever
EXAMPLES 
google: search  is dom manipulation through javascript
udemy: browse courses menu: fly out panel is dom manipulation through javascript
patatap: sound and cool animation plays with every key stroke
===================================================
***HOW DO YOU DO IT***
SELECT + MANIPULATE
The process of manipulating thing on the DOM:
2 keywords: SELECT (select class or h1 or elements) and MANIPULATE (change properties)
EXAMPLE 1
SELECT:    var h1 = document.querySelector("h1");
MANIPULATE: h1.style.color = "pink";
EXAMPLE 2
SELECT: var body = document.querySelector("body");
varisBlue - false;
MANIPULATE:  setInterval(function() {
    if(isBlue) {
        body.style.background = "#3498db";
    }
    isBlue = !blue;
}, 1000);
+++++++++++++++++++++++++++++++++++++++++++++++++++
***DOM SELECT:  THINGS TO KNOW to SELECT***
the document comes with a bunch of methods for selecting elements - these 5 are important
document.getElementById() //it shows a javascript object of what we selected
document.getElementsByClassName() //shows a javascript object for all the html items with the same class
document.getElementsByTagName() //shows a javascript object for all the html items with the same tags
document.querySelector()  //takes a css style selector and allows you to use this to select an element as an object
EXAMPLES:
document.getElementById("highlight");
document.getElementsByClassName("bolded");
document.getElementsByTagName("li");
document.querySelector("#highlight");
ACTIVE EXAMPLES (based on HTML):
document.getElementById("first");
document.getElementsByClassName("special")[0];
document.getElementsByTagName("p")[0];
document.querySelector("#first");
EXAMPLE HTML
{{<h1>I am an h1</h1>
<h1>Goodbye!</h1>
<p id="first" class="special">Hello</p>
<p class="special">Goodbye</p>
<p>Hi Again!</p>
<p id="last">Goodbye Again</p>}}
================================================
***DOM MANIPULATE: THINGS YOU CAN CHANGE/MANIPULATE***
different ways to:
--change an elements STYLE
SELECT var tag = document.getElementBy Id("highlight")
MANIPULATE: tag.style.color = "blue";
MANIPULATE: tag.style.border = "10px solid red";
MANIPULATE: tag.style.background = "yellow";
MANIPULATE: tag.style.marginTop = "200px";
*****************
--adding/removing CLASSES
***change the styles this way when it needs to be dynamic instead of static****
^^instead of ^^
FIRST DEFINE A CLASS:
.some-class {
    color: blue;
    border: 10px solid red;
}
THEN...
SELECT var tag = document.getElementById("highlight");
MANIPULATE: tag.classList.add("some-class");
NOW TO ANIMATE
tag.classlist.add("other-class");
tag.classlist.remove("other-class");
tag.classlist.toggle ("other-class");
******************
--changing the CONTENT OF A TAG
<p>
this is an <strong>awesome</strong> paragraph
</p>
SELECT: var tag = document.querySelector("p");
RETRIEVE: tag.textContent //in this case "this is an .."
MANIPULATE: tag.textContent = [the new text you want];
or tag.innerHTML (to get other elements inside selected as well)
************************
--changing ATTRIBUTES (src, href, ect)
<a href ="www.google.com"> I am a link</a>
<img src="logo.png">
SELECT: var link = document.querySelector("a");
MANIPULATE <a> :  link.setAttribute("href", "www.dogs.com");
SELECT: var link = document.querySelector("img");
MANIPULATE: img.setAttribute("src", "corgi,png");
*******************************
document.querySelectorAll()
*/