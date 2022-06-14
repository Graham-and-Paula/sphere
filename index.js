//
import DomCircle from "./src/domcircle.js";


const canvas = document.getElementById("canvas");

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
