interface Human {
	name: string;
	age: number;
	gender: string;
}
const person = {
	name: "cSharp",
	age: 24,
	gender: "male"
};

const sayHi = (person: Human): string => {
	let honorific = "Default";
	if (person.gender === "male") honorific = "Mr.";
	if (person.gender === "female") honorific = "Ms.";
	return `Hello ${honorific} ${person.name} of age ${person.age}`;
};

console.log(sayHi(person));
export {};
