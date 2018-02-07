import { Square, Cube } from '../src/math';

describe('[Math]', function () {
	it('should test whether square outputs squared input.', () => {
		// var sq = Square(5)
		// console.log(sq);
		expect(Square(5)).toEqual(25);
	});

	it('should test whether cube outputs cubed input.', () => {
		// var sq = Square(5)
		// console.log(sq);
		expect(Cube(5)).toEqual(125);
	});
});
