//
import DomCircle from "./src/domcircle.js";
import Circle from "./src/circle.js";

const canvas = document.getElementById("canvas");
let insideDots = [];
let outsideDots = [];
let overlappingDots = [];

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

// 3. Maybe we need a helper function for random numbers in RANGES
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
};
//<-- 1. Create 100 of these
for (let i = 0; i < 99; i++) {
	const dot = new DomCircle(addShape("circle", {
		class: "dot",
		cx: randomNumber(0, 200), // <-- 2a) random number between 0 and 200
		cy: randomNumber(0, 200), // <-- 2b) random number between 0 and 200	
		r:randomNumber(1, 10) // 5. *BONUS*: <-- random number between 1 and 10
		}));

// 4. We need to test each dot to see if it's INSIDE, OUTSIDE, or OVERLAPPING our zone


if (zone.getLocation(dot) === Circle.INSIDE ) {
		document.getElementsByClassName("dot").classList.toggle("inside");
		insideDots.push(dot);
		console.log(`the dot at ${dot.position} is inside`);
	}else if(zone.getLocation(dot) === Circle.OUTSIDE) {
		outsideDots.push(dot);
		console.log(`the dot at ${dot.position} is outside`);
	} else if (zone.getLocation(dot) === Circle.OVERLAPPING) {
		overlappingDots.push(dot);
	console.log(`the dot at ${dot.position} is overlaping`);
	}
		
}

insideDots.

// return the number of dots Inside, Outside and overlaping
console.log("There are" , insideDots.length , "dots inside!" );
console.log("There are" , outsideDots.length , "dots outside!");
console.log("There are" , overlappingDots.length , "dots overlapping!");

console.log(
	zone
);



