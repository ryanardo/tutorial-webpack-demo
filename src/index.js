import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
	/* This line creates the html div element that webpack gets to control. */
	var element = document.createElement('div'); //If div was changed to body, icon.png, would be the background for the entire html document.

	// Lodash, now imported by this script
	/* HERE IS WHAT LODASH DOES!!!!!!!!
	var words = [Hello, webpack];
	var displayWords = words.join(' ');
	element.innerHTML = displayWords;
	*/

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add image to our existing div.
	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
