//
import DomCircle from "./src/domcircle.js";
import Circle from "./src/circle.js";
import { addShape as addSVGShape } from "./src/svgutils.js";
import { randomNumber } from "./src/random.js";

const canvas = document.getElementById("canvas");
// const infoSpans = document.querySelectorAll("header > ul > li > span");

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

// let insideDots = [];
// let outsideDots = [];
// let overlappingDots = [];

function addShape(shapeName, attributes) {
	return addSVGShape(canvas, shapeName, attributes);
}

function changeColourOfDot(colour, dot) {
	dot.element.setAttribute("fill", colour);
}

function changeColourOfManyDots(colour, dots) {
	dots.forEach(dot => {
		changeColourOfDot(colour, dot);
	});
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

const count = document.createElement("ul");
document.querySelector("body > header").append(count);

[
	[
		dots[Circle.INSIDE],
		"white"
	],
	[
		dots[Circle.OUTSIDE],
		"pink"
	],
	[
		dots[Circle.OVERLAPPING],
		"purple"
	]
].forEach( ( [locationList, colour] ) => {
	changeColourOfManyDots(colour, locationList);

	// const count = locationList.length;
	// infoSpans[index].textContent = count;
	// console.log(count);
	// countDiv.textContent += `${length}, `;

	const listItem = document.createElement('li');
	listItem.textContent = locationList.length;
	listItem.style.color = colour;

	count.append(listItem);

	
});