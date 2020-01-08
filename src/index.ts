import * as CryptoJS from "crypto-js";

class Blocc {
	static calculateBloccHash = (
		index: number,
		previousHash: string,
		timestamp: number,
		data: string
	): string =>
		CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

	static validateStructure = (candidateBlocc: Blocc): boolean => {
		return (
			typeof candidateBlocc.index === "number" &&
			typeof candidateBlocc.hash === "string" &&
			typeof candidateBlocc.previousHash === "string" &&
			typeof candidateBlocc.timestamp === "number" &&
			typeof candidateBlocc.data === "string"
		);
	};

	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		data: string,
		timestamp: number
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timestamp = timestamp;
	}
}

const genesisBlocc: Blocc = new Blocc(0, "69", "", "Arceus", 20200107);

let bloccchain: Blocc[] = [genesisBlocc];

const getBloccchain = (): Blocc[] => bloccchain;

const getLatestBlocc = (): Blocc => bloccchain[bloccchain.length - 1];

const getHashForBlocc = (blocc: Blocc): string =>
	Blocc.calculateBloccHash(
		blocc.index,
		blocc.previousHash,
		blocc.timestamp,
		blocc.data
	);

const validateBlocc = (candidateBlocc: Blocc, validBlocc: Blocc): boolean => {
	//validate the structure of the block
	if (!Blocc.validateStructure(candidateBlocc)) return false;
	//make sure the new block is attached right at the end of the chain
	if (validBlocc.index + 1 !== candidateBlocc.index) return false;
	//make sure the new blocc has the hash of the previous blocc
	if (validBlocc.hash !== candidateBlocc.previousHash) return false;
	//make sure the hash makes sense
	if (getHashForBlocc(candidateBlocc) !== candidateBlocc.hash) return false;
	//if reached here, return true
	return true;
};

const addToBloccchain = (newBlocc: Blocc): Blocc[] => {
	if (validateBlocc(newBlocc, getLatestBlocc())) {
		bloccchain.push(newBlocc);
		return bloccchain;
	}
};

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlocc = (data: string): Blocc => {
	const previousBlocc: Blocc = getLatestBlocc();
	const newIndex: number = previousBlocc.index + 1;
	const newTimestamp: number = getNewTimeStamp();
	const newHash: string = Blocc.calculateBloccHash(
		newIndex,
		previousBlocc.hash,
		newTimestamp,
		data
	);

	const newBlocc: Blocc = new Blocc(
		newIndex,
		newHash,
		previousBlocc.hash,
		data,
		newTimestamp
	);

	addToBloccchain(newBlocc);
	return newBlocc;
};

console.log(bloccchain);

createNewBlocc("pikachu");
createNewBlocc("mimikyu");

console.log(bloccchain);

export {};
