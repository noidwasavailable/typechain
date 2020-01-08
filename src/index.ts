import * as CryptoJS from "crypto-js";

class Blocc {
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

	static calculateBloccHash = (
		index: number,
		previousHash: string,
		timestamp: number,
		data: string
	): string =>
		CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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

const genesisBlocc: Blocc = new Blocc(0, "101", "", "Yeee Boi", 20200107);

let bloccchain: Blocc[] = [genesisBlocc];

const getBloccchain = (): Blocc[] => bloccchain;

const getLatestBlocc = (): Blocc => bloccchain[bloccchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(getBloccchain());

export {};
