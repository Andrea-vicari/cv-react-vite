# Portfolio Website

<img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/CR_GitHub_cover.jpg" width="400px">

## Intro
Repository for my portfolio website coded with React.js
Project installed using Vite and Bootstrap, with the npm package `npm install react-bootstrap bootstrap`.
Portfolio projects are stored locally in a JSON file, coming from an old version of my Portfolio.
Datas of the projects are fetched using UseState Hook and layout composed mapping through the objects. Because some elements contain HTML tags, i used `dangerouslySetInnerHTML` property to render them correctly.
Each projects, after the click, opens the Description using the Bootstrap Modals.


## Technologies
<img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/Bootstrap_logo.png" style="width:45px"> <img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/React_logo.png" style="width:45px"> <img src="https://github.com/Andrea-vicari/Andrea-vicari/blob/main/vite.svg" style="width:45px">

## Installation
* FrontEnd and NODE.js packages
  * Clone this directory under `/htdocs` directory of your XAMPP installation
  * Open  a terminal and navigate to the directory you installed this project
  * Install locally Bootstrap: digit `npm install bootstrap@3`
  * Initialize the directory: digit `npm init`
  * Add the following packages MYSQL, EXPRESS, CORS, digit: `npm i mysql express cors`
  * Start the server, digit: `npm start`
  * You should see `Listening on PORT 5000`
  * Start the XAMMP server
  * In the browser, digit `localhost/`
  * You should see the directory you installed this application
  * Click the name of the directory
  * You should see the Calculator page

* Database -  This project needs a MYSQL database to store the Drawer
  * Start the XAMMP server (if not already)
  * In the browser, digit `localhost/phpmyadmin/`
  * You should see the homepage of phpMyAdmin
  * Click import
  * Choose the `cash_calcultor.sql`file
  * It contains the `drawer` table, with initial drawer (empty)



## Software used

* XAMPP -
 * PhpMyAdmin - version 5.2.1
* Bootstrap5 - version 3.4.1
* Node.js - version 3.4.1
  * NPM packages
    * Mysql - 2.18.1
    * Express - 4.18.2
    * Cors - 2.8.5
 * FileSaver.js - 2.0.0

- - -
© 2023 Andrea Vicari | All Rights Reserved.
