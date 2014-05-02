Canvas Game Dev
===============
Step by step examples of building an HTML5 game with JavaScript and Canvas.

Additional Resources:
- http://github.com/greypants/html5-games-talk
- http://github.com/greypants/blastEngine
- http://viget.com/extend/time-based-animation
- http://createjs.com
- http://kineticjs.com
- http://paperjs.org
- http://html5rocks.com/en/tutorials/canvas/performance

## Running Locally
Setup based on (gulp-starter)[https://github.com/greypants/gulp-starter]

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```

### Install Compass (if you haven't already)
The gulp-compass module relies on Compass already being installed on your system.
```
gem update --system
gem install compass
```
### Install npm dependencies
```
npm install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp and be amazed.
```
gulp
```

This will create and run the task defined in `gulpfile.js`. If you're on OS X,
and have Chrome installed, a window will open displaying the demo page. If not,
you can visit http://localhost:8080 to view the test page.
