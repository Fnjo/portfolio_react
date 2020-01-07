# Portfolio by Franjo Lam

```
Clone repo
$yarn
$yarn start
```

This is a complete refactor of my old portfolio in React, the old one was written in basic html and css.
With this refactor comes a small update in styling




## Important adjustments
* Intro and projects view is now split up, it used to be all in one huge index file.
* Everything has been split properly into its own component.




## Style changes
* Changed fade out animation on the arrow button at the intro
* Changed projects nav to a more neumorphism (soft ui) style
* Replaced sliding project pages with a fade out
* Replaced colored project backgrounds with neutral white backgrounds
* Replaced colored nav icons with white icons to match the neumorphism styled nav 


## Adding new projects
Updating and adding new projects is now 




## Technical details
* Used proptypes for typechecking




## Project structure
```
public
 ├── favicons
 ├── index.html
 ├── manifst.json
src
 ├── components
      ├── nav
      ├── projects
      ├── views
 ├── images
      ├── fnjo
      ├── logo
 ├── App.css
 ├── App.js
 ├── index.css
 ├── index.js
 └── serviceWorker.js
```
