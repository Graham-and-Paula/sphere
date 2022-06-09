//
function add(a, b) {
	return a + b;
}

class Circle {
	position;
	radius;

	constructor(position, radius) {
		Object.assign(this, { position, radius });
	}

	isInside(dot) {
		return Circle.getDistance(this, dot) <= this.radius;
	}
	isOutside(dot) {
		return Circle.getDistance(this, dot) > this.radius;
	}

	static getDistance(a, b) {
		return Math.sqrt(a.position.map((coord, index) => {
			return (coord - b.position[index]) ** 2
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

const zone = new DomCircle(document.getElementById("area"));
const [dot1, dot2] = [...document.getElementsByClassName("dot")]
	.map(element => new DomCircle(element));

console.log(
	zone,
	dot1,
	dot2
);

console.log(
	zone.isInside(dot1)
);

console.log(
	zone.isInside(dot2)
);

const zone3D = new Circle([10, 10, 10, 10], 5);
const person = new Circle([12, 7, 9, 7], 1);
const otherPerson = new Circle([-1, -3, 20, 2], 1);

console.log(
	zone3D.isInside(person)
);

console.log(
	zone3D.isInside(otherPerson)
);
