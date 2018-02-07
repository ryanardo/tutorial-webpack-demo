/*
The import statements below import ALL of the external code neccessary to make the corresponding HTML file(s) run properly.
*/
import _ from 'lodash';
import printMe from './print.js';

function component() {
	/* This line creates the html div element that webpack gets to control. */
	var element = document.createElement('div'); //If div was changed to body, icon.png, would be the
	var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());

if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module!');
		printMe();
	})
}
