function add(a, b) {
	return a + b;
}

export default class Circle {
	position;
	radius;

	static OUTSIDE = Symbol("outside");
	static INSIDE = Symbol("inside");
	static OVERLAPPING = Symbol("overlapping");

	constructor(position, radius) {
		Object.assign(this, { position, radius });
	}

	getLocation(dot) {
		const delta = Circle.getDistance(this, dot) - this.radius;

		if (delta > dot.radius)
			return Circle.OUTSIDE;
		else if (delta <= -dot.radius)
			return Circle.INSIDE;
		else
			return Circle.OVERLAPPING;
	}

	static getDistance(a, b) {
		return Math.sqrt(a.position.map((coord, index) => {
			return (coord - b.position[index] ?? 0) ** 2
		}).reduce(add, 0));
	}
}

// console.log(
// 	zone,
// 	dot1,
// 	dot2,
// 	dot3
// );

// console.log(
// 	zone.getLocation(dot1) === Circle.INSIDE
// );

// console.log(
// 	zone.getLocation(dot2) === Circle.OUTSIDE
// );

// console.log(
// 	zone.getLocation(dot3) === Circle.OUTSIDE
// );

// const zone3D = new Circle([10, 10, 10, 10], 5);
// const person = new Circle([12, 7, 9, 7], 1);
// const otherPerson = new Circle([-1, -3, 20], 1);

// console.log(
// 	zone3D.isInside(person)
// );

// console.log(
// 	zone3D.isInside(otherPerson)
// );
