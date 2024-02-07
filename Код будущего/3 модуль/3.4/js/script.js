document.addEventListener("DOMContentLoaded", () => {
	let a = Number(prompt("Введите число a:")),
		b = Number(prompt("Введите число b:")),
		c = Number(prompt("Введите число c:"));

	let D = b * b - 4 * a * c;

	if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);

		alert("x1=" + x1 + "\nx2=" + x2);
	} else {
		alert("Нет корней");
	}
});