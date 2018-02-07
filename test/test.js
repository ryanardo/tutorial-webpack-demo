import { square, cube } from "../src/math.js";
const assert = require('assert');


describe('math', function () {
	describe('square', function () {
		it('should return square of input value', function () {
			assert.equal(25, square(5));
		});
	});
});
