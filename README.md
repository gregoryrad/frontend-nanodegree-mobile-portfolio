## Website Performance Optimization portfolio project

This project is part of the Front-End Developer Nanodegree program at Udacity.com. This online example portfolio has been optimized for speed using information from Google Developer Tools. The `index.html` has been tested for performance for mobile using [Google's Page Speed insights](https://developers.google.com/speed/pagespeed/insights/). Optimizations have been made to  `app/views/js/main.js` and `views/pizza.html` to achieve a consistent framerate of under `60fps` when scrolling the page and less than `5ms` as shown in the developer tools when using the pizza slider on `views/pizza.html`.  

### Project Review

**Using [Node.js](https://nodejs.org/), [Gulp](https://www.npmjs.com/package/gulp) has been used as a build tool to minify the CSS and JavaScript.** 

The source files for the project are contained in `frontend-nanodegree-mobile-portfolio/app` and a working, post-task-runner, build of the project may be reviewed in `frontend-nanodegree-mobile-portfolio/dist`. 

```
frontend-nanodegree-mobile-portfolio
|--app (contains the source files for the project)
|--dist (contains the destination files for the project)
|--gulpfile.js
|--package.json
```


### Getting started

**The steps necessary to download, configure and implement Gulp (the task runner) on the reviewer's desktop are outlined below:**

1. If you have Node.js installed on your machine you can install Gulp globally on your workstation using the following command:

```bash
$ npm install -g gulp
```

2. You will then need to clone this GitHub repository to a local directory. 
3. Next navigate to the project directory and install the ```node_modules``` folder and the necessary modules for ```gulpfile.js``` to use

```bash
$ cd /path/to/the-project-folder
$ npm install gulp --save-dev
```

4. Then, install the plug-ins needed to run the tasks in ```gulpfile.js```

```bash
$ npm install --save-dev gulp-uglify gulp-clean-css
```

5. Finally, run the following command to run all of the gulp tasks and build the app in the ```dist``` directory for review

```bash
$ gulp
```

### Running the app on a local server

1. To inspect the site on a smartphone, you may set up the app to run on a local server

```bash
$ cd /path/to/the-project-folder
$ python -m SimpleHTTPServer 8080
```

2. Open a browser and visit ```localhost:8080/dist```
3. Download and install [ngrok](https://ngrok.com/) to the top-level of the project directory to make the local server accessible remotely.

``` bash
$ cd /path/to/the-project-folder
$ ./ngrok http 8080
```

4. Copy the public URL that ngrok provides and enter it followed by ```/dist``` in a browser on the smartphone to run the app  
