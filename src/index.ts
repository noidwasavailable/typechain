const name = "cSharp",
	age = 24,
	gender = "male";

const sayHi = (name: string, gender: string, age: number): string => {
	let honorific = "Default";
	if (gender === "male") honorific = "Mr.";
	if (gender === "female") honorific = "Ms.";
	return `Hello ${honorific} ${name} of age ${age}`;
};

console.log(sayHi(name, gender, age));
export {};
