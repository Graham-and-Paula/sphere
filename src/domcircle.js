import Circle from "./circle.js";

export default class DomCircle extends Circle {
	element;

	constructor(element) {
		const [
			cX,
			cY,
			radius
		] = ["cx", "cy", "r"].map((attribute) =>
			Number(element.getAttribute(attribute))
		);

		super([cX, cY], radius);
		// this.element = element;
		Object.assign(this, {element});
	}
}
