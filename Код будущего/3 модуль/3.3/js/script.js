document.addEventListener("DOMContentLoaded", () => {
	let num_1 = Number(prompt("Введите 1 число:")),
		num_2 = Number(prompt("Введите 2 число:"));

	console.log(num_1 + ' + ' + num_2 + ' = ' + (num_1 + num_2));
	console.log(num_1 + ' - ' + num_2 + ' = ' + (num_1 - num_2));
	console.log(num_1 + ' * ' + num_2 + ' = ' + (num_1 * num_2));
	console.log(num_1 + ' / ' + num_2 + ' = ' + (num_1 / num_2));
});