//
const canvas = document.getElementById("canvas");

function add(a, b) {
	return a + b;
}

function createShape(shapeName, attributes = {}) {
	const shape = document.createElementNS("http://www.w3.org/2000/svg", shapeName);

	for (const [attributeName, value] of Object.entries(attributes))
		shape.setAttribute(attributeName, value);

	return shape;
}

function addShape(shapeName, attributes) {
	const shape = createShape(shapeName, attributes);
	canvas.append(shape);
	return shape;
}

class Circle {
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

class DomCircle extends Circle {
	constructor(element) {
		const [
			cX,
			cY,
			radius
		] = ["cx", "cy", "r"].map((attribute) =>
			Number(element.getAttribute(attribute))
		);

		super([cX, cY], radius);
	}
}

// Lazy way:
//
// const rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
// rectangle.setAttribute(
// 	"x", "120"
// );
// rectangle.setAttribute(
// 	"y", "120"
// );
// rectangle.setAttribute(
// 	"width", "20"
// );
// rectangle.setAttribute(
// 	"height", "40"
// );
// rectangle.setAttribute(
// 	"fill", "cornflowerblue"
// );

// Even lazier way:
// const rectangle = createShape("rect", {
// 	x: 80,
// 	y: 60,
// 	width: 40,
// 	height: 80,
// 	fill: "chartreuse"
// });

// const circle = createShape("circle", {
// 	cx: 30,
// 	cy: 50,
// 	r: 10,
// 	fill: "pink"
// })

// canvas.append(rectangle, circle);






const zone = new DomCircle(addShape("circle", {
	id: "area",
	cx: 100,
	cy: 100,
	r: 80,
	fill: "crimson"
}));

// 1. Create 100 of these
const dot = new DomCircle(addShape("circle", {
	class: "dot",
	cx: 100, // <-- 2a) random number between 0 and 200
	cy: 100, // <-- 2b) random number between 0 and 200
	// 3. Maybe we need a helper function for random numbers in RANGES
	r: 2 // 5. *BONUS*: <-- random number between 1 and 10
}));

// 4. We need to test each dot to see if it's INSIDE, OUTSIDE, or OVERLAPPING our zone

console.log(
	zone
);







// const [dot1, dot2, dot3] = [...document.getElementsByClassName("dot")]
// 	.map(element => new DomCircle(element));

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
