import { Random } from "./Random";

export class Password {
	constructor(
		private length: number[] | number,
		private symbols: "special" | "lettersCaps" | "lettersLower" | "numbers"
	) {}

	//! Недетерминированная функция
	private getLetter(): string {
		let range: Array<[number, number]> = [];

		// char codes
		if (this.symbols.includes("lettersCaps")) range.push([65, 91]);
		if (this.symbols.includes("lettersLower")) range.push([97, 123]);
		if (this.symbols.includes("numbers")) range.push([48, 58]);
		if (this.symbols.includes("special")) range.push([33, 48], [58, 65], [91, 97], [123, 127]);

		const code = Random.get(range);
		return String.fromCharCode(code);
	}

	//! Недетерминированная функция
	generate(): string {
		let length: number;
		if (typeof this.length === "number") length = this.length;
		else length = ~~(Math.random() * (this.length[1] - this.length[0] + 1)) + this.length[0];

		let res = "";
		for (let i = 0; i < length; i++) {
			res += this.getLetter();
		}

		return res;
	}
}
