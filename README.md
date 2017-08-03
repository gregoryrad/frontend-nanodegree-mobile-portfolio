## Website Performance Optimization portfolio project

This project was completed as part of the Front-End Developer Nanodegree program at Udacity.com. Using information gleaned from Google Developer Tools, the performance of the Critical Rendering Path for this example online portfolio has been evaluated and diagnosed. Armed with this information, improvements to the optimization of the site have been made to dramatically improve overall performance and load times for the above the fold content.

### Optimizations Overview

**Performance improvements to the Home page:**

The `index.html` has been optimized to achieve a PageSpeed Score of at least 90 for mobile and desktop using [Google's Page Speed insights](https://developers.google.com/speed/pagespeed/insights/). The following improvements were made to avoid render blocking:

* Inlined the Critical Path CSS into the `<header>` and moved the full CSS out of the `<header>`, to the end of the page, just before the closing `<body>` tag
* Javascript `<link>` elements were also moved out of the `<header>`, to the end of the page, just before the closing body tag and the `async` attribute was applied where needed
* The webfont loader script was applied to defer the loading of the Google Web fonts required
* The profile and pizzaria images were optimized to improve load times

**Performance improvements to the Pizza page:**

Optimizations have been made to `app/views/js/main.js` and `views/pizza.html` to avoid Forced Synchronous Layout and removing Jank in order to achieve a consistent framerate of under `60fps` when scrolling the page and less than `5ms` (as shown in the developer tools) when using the pizza slider on `views/pizza.html`.

The performance improvements for the size slider were achieved by:

* Using DRY methods by creating a variable to avoid multiple query selectors and thereby avoiding querying the DOM mutiple times.
* Refactoring the `changePizzaSizes()` function to determine the width and then sets the width for each element to a percentage
* Saving the array length in the `changePizzaSizes()` function to a local variable, thereby the array's length property is not accessed to check its value at each iteration of the loop
* Declaring the pizzasDiv variable in the `changePizzaSizes()` function outside the loop for efficiency
* Changing query selectors in `changeSliderLabel()` to `getElementById()` to improve the Web API call


Performance improvements to the scrolling were achieved by:

* Enabling hardware acceleration by editing the `.mover` class selector in `main.js` by adding `backface-visibility: hidden;` and adding `transform: translateZ(0);` to trigger the GPU. Also, included `gulp-autoprefixer` to add vendor prefixes to the build for these edits.
* Changed querySelector to getElementsByClassName in the `updatedPositions()` function to improve the Web API call
* Assign a variable outside the loop in the `updatedPositions()` function and declaring the variable for 'phase' and assigning a variable 'len' to the items length...placing both in the condition statement to avoid iteration
* Dynamically calculating the number of rows needed to fill the screen with pizza images based on the viewport height and resolution.
* Assigning a variable outside the loop replacing a query selector with `getElementById()` to improve the Web API call



### Build tool and task-runner

**Using [Node.js](https://nodejs.org/), [Gulp](https://www.npmjs.com/package/gulp) has been utilized as a build tool to migrate the files to the `dist` directory and to minify the CSS and JavaScript.**

The source files for the project are contained in `frontend-nanodegree-mobile-portfolio/app` and a working, post-task-runner, build of the project may be reviewed in `frontend-nanodegree-mobile-portfolio/dist`.

```
frontend-nanodegree-mobile-portfolio
|--app (contains the source files for the project)
|--dist (contains the destination files for the project)
|--gulpfile.js
|--package.json
```


#### Getting started

**The steps necessary to download, configure and implement Gulp (the task runner) and required components on the reviewer's desktop are outlined below:**

1. If you have Node.js installed on your machine you can install Gulp globally on your workstation using the following command:

```bash
$ npm install -g gulp
```

2. You will then need to clone this GitHub repository to a local directory.
3. Next navigate to the project directory and install the `node_modules` folder and the necessary modules for `gulpfile.js` to use

```bash
$ cd /path/to/the-project-folder
$ npm install gulp --save-dev
```

4. Then, install the plug-ins needed to run the tasks in `gulpfile.js`

```bash
$ npm install --save-dev gulp-uglify gulp-clean-css gulp-autoprefixer
```

5. Finally, run the following command to run all of the gulp tasks and build the app in the `dist` directory for review

```bash
$ gulp
```

#### Running the app on a local server

1. To inspect the site on a smartphone, you may set up the app to run on a local server

```bash
$ cd /path/to/the-project-folder
$ python -m SimpleHTTPServer 8080
```

2. Open a browser and visit `localhost:8080/dist`
3. Download and install [ngrok](https://ngrok.com/) to the top-level of the project directory to make the local server accessible remotely.

``` bash
$ cd /path/to/the-project-folder
$ ./ngrok http 8080
```

4. Copy the public URL that ngrok provides and enter it followed by `/dist` in a browser on the smartphone to run the app  
