document.addEventListener("DOMContentLoaded", () => {
	const var_1 = "qwerty123";
	const var_2 = "778779";
	const var_3 = false;

	console.log(var_1, var_2, var_3);

	// Формулировка задания так себе, не понятно, что за исходная переменная
	// Я просто создам новую переменную и проведу все преобразования с ней

	let a = "qwerty123";
	console.log("\nВывод 1:", a, typeof a);

	a = String(a);
	console.log("Вывод 2:", a, typeof a);

	a = Number(a);
	console.log("Вывод 3:", a, typeof a);

	a = Boolean(a);
	console.log("Вывод 4:", a, typeof a);

	console.log("\nИзменю изначальный тип данных переменной на Number")

	a = 123;
	console.log("Вывод 1:", a, typeof a);

	a = String(a);
	console.log("Вывод 2:", a, typeof a);

	a = Number(a);
	console.log("Вывод 3:", a, typeof a);

	a = Boolean(a);
	console.log("Вывод 4:", a, typeof a);
});