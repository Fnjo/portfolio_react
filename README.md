# Portfolio by Franjo Lam


### Setup
```
Clone repo
$yarn
$yarn start
```
<br />
This is a complete refactor of my old portfolio in React, the old one was written in basic html and css. With this refactor also comes a small update in styling.

It is now a lot easier to update my portfolio because everything is now split up in components. Splitting everything up in its own components makes it easier to read and understand the code. 

<br />

### Important adjustments
* The intro and projects view is now split up, it used to be all in one huge index file.
* Everything has been split properly into its own component.

<br />

### Style changes
* Changed fade out animation on the arrow button at the intro
* Changed projects nav to a more neumorphism (soft ui) style
* Replaced sliding project pages with a fade out
* Replaced colored project backgrounds with neutral white backgrounds
* Replaced colored nav icons with white icons to match the neumorphism styled nav 

<br />

### Adding new projects
Updating and adding new projects has now been made easier

1. Add a navtile component in ProjectsNav.jsx with its properties
2. Create an new project component in the Projects map (use other project as template)
3. Add the new project component in ProjectsView.jsx with the name as a key property

<br />

### Technical details
* Used proptypes for typechecking
* Used react transition group for the transitions
<br />

### Project structure
```
public
 ├── favicons
 ├── index.html
 ├── manifest.json
src
 ├── components
      ├── nav
      ├── projects
      └── views
 ├── images
      ├── fnjo
      └── logo
 ├── App.css
 ├── App.js
 ├── index.css
 └── index.js
```
