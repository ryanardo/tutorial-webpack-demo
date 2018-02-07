/*
The import statements below import ALL of the external code neccessary to make the corresponding HTML file(s) run properly.
*/
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in the development mode!');
}

function component() {
	/* This line creates the html div element that webpack gets to control. */
	var element = document.createElement('pre');

	element.innerHTML = [
	  'Hello webpack!',
	  '5 cubed is equal to ' + cube(5)
	].join('\n\n');


	return element;
}

document.body.appendChild(component());
