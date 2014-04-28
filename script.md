#intro

Thank you so much for having me! Converge is an awesome conference, and I'm so happy to be here. My name is Dan Tello. I'm a Senior Front End Developer, and super priviledge to be part of the team at Viget in Falls Church VA. No matter how long you've been in our industry, there's always something new to learn, and I hope I can introduce you to something new to you today. I'm one of 10 brilliant front end devs on our team, and the diversity of strengths and interests gives us a lot of flexiblity to persue uncharted territory guided by our personal interests. Today, that territory is HTML 5 game development with Javascript and Canvas.

## Run Puma Run
2012 was the year of the summer Olympics.

![Olympic Logo](bolt.jpg)

Puma, the account I was primarily working with at the time, had a dilemma. Usain Bolt was their star athlete. He had his own line of shoes, and was all over their site. Puma was NOT however, and official olympic sponsor, and for some obscure legal reasons, was not allowed to feature or mention any affilliation with an Olympic athelte during the games. So Usain had to go.

![Bolt crossed out](bolt-x.jpg)

One of our Designers was brainstorming with our contact on how to fill the gaping holes throughout the site where Bolt used to be.

He *jokingly* said, "we should just pixelate his face..." But then something clicked in his mind. "Wait. No really. What if we pixelate his face... and put him into an 8bit style game."

![Bolt pixel face](bolt-pixel.jpg)

The client loved the idea, and asked for a more formal proposal. For an 8bit style, side-scrolling running game. Owen walked over to the FED pit and asked, "who wants to build an 8bit game? Also... is that even possible?" To which I answered:

¯\(°_o)/¯

Technically anything is *possible* being able to pull it off within the time constraints is another thing. But after some quick proof of concepts and prototyping, we decided to go for it, and got the client on board. Owen came up with some awesome art, drawing heavily from NES Classics like:

![Excite Bike](excite-bike.jpg)

and

![Punch Out!](punchout.gif)

The result was awesome, and it made building it that much more fun.

![Run Puma Run](runpumarun.gif)

### Demo
- Talk through gameplay.
- Talk though what went into it
  - Collaboration on art, animations
    - Run sequence was super awkward the first few times around
- Sound custom sound effects with garage band!
- Talk through success metrics

So. With no game dev experience, average javascript skills, and no great libraries in early 2012 - how does one pull this off?

http://lmgtfy.com/?q=html5+game+development

# Canvas

```html
<canvas></canvas>
```
- A single DOM element.
- No DOM tree to interact with!
- The only thing you can put inside it is fallback messaging.
- No free interactivity like buttons, hovers, links, css styling, etc…

Say you want to create a button with html and css. You'd just add the markup to your page, and style it up with some nice hover and active states. Want to add a button to your canvas?
- Draw the button and store its coordinates
- listen for mousemove on the canvas
- listen for mouseclick on the canvas
- check to see if your mouse coordinates are intersecting with your button coordinates, if they are, redraw the button with the appropriate styles

![wat](wat.jpg)

At this point, you'll either start developing your own library, or frantically googling how to use someone elses. At the time, I couldn't find anything suitible, so I opted for option A - which ended up being a GREAT learning experince. But before we start abstracting code, lets walk through the basics.

## The Canvas Context

```js
canvas = new document.createElement('canvas')
ctx = canvas.getContext('2d')
```

A canvas can have two kinds of context. `2d` or `webgl`. WebGL is super cool, and is what enables full 3d rendering in the browser. But for this presentation, when I reference the context, we'll be talking about`2d`. Nearly every interaction with the canvas happens through its context. Like drawing!

## Draw all the things!

### Vector Things

```js
ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.fill();
ctx.closePath();
```

If there are any math nerds out there, this is for you. Drawing and manipulating vector paths is pure math. Drawing anything beyond a circle or rectangle by hand gets pretty complex pretty fast. But like Sinbad told us in the 90's, math is power! We'll get to that power when we look at animation.

In the meantime, here are a few of the methods you'd use.

```js
fill()
stroke()
beginPath()
moveTo()
closePath()
lineTo()
clip()
quadraticCurveTo()
bezierCurveTo()
arc()
arcTo()
```

### Pixel Things
But enough math. Lets get to the pictures. Way easier.

```js
var image = document.createElement('image');
image.src = ('runner.png');
ctx.drawImage(image, x, y);
```
(simulate run code, reveal)
![runner](runner-static.png)

All we need here is the `drawImage` method. All we have to do is pass it one of the following elements `<img>`, `<canvas>`, or `<video>`, and the x, y coordinates to draw it to. Simple.

We can get more complex if we want to though. Lets talk about...

### Sprites
![Run Puma Run Spritesheet](spritesheet.png)
This is the player spritesheet from Run Puma Run. It contains every frame for every player in the game. Because downloading 1 file is better than downloading 70. The `drawImage` method gives us some additional options for displaying only a certain portion of an image. We can leverage these options to handle drawing our sprites.

```js
var runner = {
  spritesheet: spritesheetPlayers
  width: 80,
  height: 150,
  frames: {
    standing: { x: 0, y: 0 },
    dying: { x: 1500, y: 0 }
  }
};

runner.state = runner.frames.dying;
```
We could create named positions within the spritesheet, then use just that part of the spritesheet to render our character.

```js
ctx.drawImage(
  runner.spritesheet, // source image (spritesheet)
  runner.state.x,     // source x (x location within a spritesheet)
  runner.state.y,     // source y (y location within a spritesheet)
  runner.width,       // source width
  runner.height,      // source height
  runner.x,           // destination x
  runner.y,           // destination y
  runner.width,       // destination width (same source width)
  runner.height       // destination height (same source height)
);
```

An alternative method would be to give the player its own canvas element, position the spritesheet within that, then render the player `canvas` to your game canvas.

```js
var spriteCanvas = document.createElement('canvas');

spriteCanvas.width = player.width;
spriteCanvas.height = player.height;
playerCtx = spriteCanvas.getContext('2d');

playerCtx.drawImage(player.spritesheet, player.state.x, player.state.y);
```

Now that we can draw, lets start animating!

WITHOUT JQUERY OR CSS3
![The Horror](thehorror.png)

## Animate all the things!
Respond. Draw. Repeat.

```js
var loop = function {
  moveAllTheThings();
  drawAllTheThings();
  requestAnimationFrame(loop);
};
```

