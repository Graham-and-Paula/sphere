export function createShape(shapeName, attributes = {}) {
	const shape = document.createElementNS("http://www.w3.org/2000/svg", shapeName);

	for (const [attributeName, value] of Object.entries(attributes))
		shape.setAttribute(attributeName, value);

	return shape;
}

export function addShape(canvas, shapeName, attributes) {
	const shape = createShape(shapeName, attributes);
	canvas.append(shape);
	return shape;
}

function createCountDiv(tagName, ) {
	const countDiv = document.createElement()
}
