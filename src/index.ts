class Human {
	public name: string;
	public age: number;
	public gender: string;

	constructor(name: string, age: number, gender: string) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

const me = new Human("cSharp", 24, "male");
const exile = new Human("necroRotom", 4, "female");

const sayHi = (person: Human): string => {
	let honorific = "Default";
	if (person.gender === "male") honorific = "Mr.";
	if (person.gender === "female") honorific = "Ms.";
	return `Hello ${honorific} ${person.name} of age ${person.age}`;
};

console.log(sayHi(exile));
export {};
