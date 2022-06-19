//
import DomCircle from "./src/domcircle.js";
import Circle from "./src/circle.js";
import { addShape as addSVGShape } from "./src/svgutils.js";
import { randomNumber } from "./src/random.js";

const canvas = document.getElementById("canvas");

const zone = new DomCircle(addShape("circle", {
	id: "area",
	cx: 100,
	cy: 100,
	r: 80,
	fill: "crimson"
}));

const dots = {
	[Circle.INSIDE]: [],
	[Circle.OUTSIDE]: [],
	[Circle.OVERLAPPING]: []
};

const countDiv = document.createElement("div");
document.append(countDiv);
// countDiv.style.zIndex = "2";
// countDiv.style.color = "black";
// document.getElementsByTagName('div').textContent = String(dots[Circle.INSIDE].length);
document.append();

// let insideDots = [];
// let outsideDots = [];
// let overlappingDots = [];

function addShape(shapeName, attributes) {
	return addSVGShape(canvas, shapeName, attributes);
}

// for...in
// create an Array of size 100 and FILL it with 1s
for (const i in Array(100).fill(1)) {

// for (let i = 0; i < 99; i += 1) {
	const dot = new DomCircle(
		addShape(
			"circle",
			{
				class: "dot",
				cx: randomNumber(0, 200), // <-- 2a) random number between 0 and 200
				cy: randomNumber(0, 200), // <-- 2b) random number between 0 and 200	
				r: randomNumber(1, 10) // 5. *BONUS*: <-- random number between 1 and 10
			}
		)
	);

	const location = zone.getLocation(dot); // 
	dots[location].push(dot);

	// 4. We need to test each dot to see if it's INSIDE, OUTSIDE, or OVERLAPPING our zone
	// if (location === Circle.INSIDE)
	// 	insideDots.push(dot);
	// else if (location === Circle.OUTSIDE)
	// 	outsideDots.push(dot);
	// else /*if (location === Circle.OVERLAPPING)*/
	// 	overlappingDots.push(dot);

	// INDEPENDENT CHECKS:
	// location === Circle.INSIDE && insideDots.push(dot);
	// location === Circle.OUTSIDE && outsideDots.push(dot);
	// location === Circle.OVERLAPPING && overlappingDots.push(dot);
}

// HOMEWORK #2: Keep it DRY

//option1
//  dots[Circle.INSIDE,
// 		Circle.OUTSIDE,
// 		Circle.OVERLAPPING
// 	] = ["fill"].map((dot, attribute) =>)

dots[Circle.INSIDE].forEach(dot => {
	dot.element.setAttribute("fill", "white");
});
dots[Circle.OUTSIDE].forEach(dot => {
	dot.element.setAttribute("fill", "pink");
});
dots[Circle.OVERLAPPING].forEach(dot => {
	dot.element.setAttribute("fill", "purple");
});

//option 2

// for (const dot of dots[Circle.INSIDE]) {
// 	dot.element.setAttribute("fill", "white");
// }
// for (const dot of dots[Circle.OUTSIDE]) {
// 	dot.element.setAttribute("fill", "pink");
// }
// for (const dot of dots[Circle.OVERLAPPING]) {
// 	dot.element.setAttribute("fill", "purple");
// }

//option 3

// for (let i = 0; i < dots[Circle.INSIDE].length; i++) {
// 	const dot = dots[Circle.INSIDE][i];
// 	dot.element.setAttribute("fill", "white");
// }
// for (let i = 0; i < dots[Circle.OUTSIDE].length; i++) {
// 	const dot = dots[Circle.OUTSIDE][i];
// 	dot.element.setAttribute("fill", "pink");
// }
// for (let i = 0; i < dots[Circle.OVERLAPPING].length; i++) {
// 	const dot = dots[Circle.OVERLAPPING][i];
// 	dot.element.setAttribute("fill", "purple");
// }

// HOMEWORK #1: Display how many are in each LOCATION in a DOM element:


	

	console.log(dots[Circle.INSIDE].length);



console.log("There are" , dots[Circle.INSIDE].length , "dots inside!" );
console.log("There are" , dots[Circle.OUTSIDE].length , "dots outside!");
console.log("There are" , dots[Circle.OVERLAPPING].length , "dots overlapping!");
