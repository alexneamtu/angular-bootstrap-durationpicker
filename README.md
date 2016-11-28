# angular-bootstrap-durationpicker [![Build Status](https://travis-ci.org/alexneamtu/angular-bootstrap-durationpicker.png)](https://travis-ci.org/alexneamtu/angular-bootstrap-durationpicker)

NPM and bower package for a simple AngularJS duration picker directive.


## Usage
To install the package, run:
`npm install angular-bootstrap-durationpicker`
or
`bower install angular-bootstrap-durationpicker`

Include the script and the css into your project:
```html
<script src="node_modules/angular-bootstrap-durationpicker/dist/main.js"></script> (after having the angular.js included)
```

Insert the `durationpicker` directive into your template:

<div ng-init="offset = 12 * 60 * 60"> <!-- this is just for initializing the offset model, you can do it in the controller for example -->
    <durationpicker model="offset" hour-step="1" minute-step="5" min="-43200" max="43200" before-after-what="midnight" ></durationpicker>
</div>


## License
MIT