export class Password {
	constructor(
		private length: number[] | number,
		private symbols: "all" | "lettersCaps" | "lettersLower" | "numbers" = "all"
	) {}

	private getLetter(): string {
		let range: Array<number>;
		switch (this.symbols) {
			case "all":
				range = [33, 126];
				break;
			case "lettersCaps":
				range = [65, 90];
				break;
			case "lettersLower":
				range = [97, 122];
				break;
			case "numbers":
				range = [48, 57];
				break;
		}
		const [min, max] = range;
		const res = String.fromCharCode(~~(Math.random() * (max - min + 1)) + min);
		return res;
	}

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
