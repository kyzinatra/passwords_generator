export class Password {
	constructor(private length: number[] | number, private symbols: string[] | string = "all") {}

	private getLetter(): string {
		let range = [33, 122];
		if (typeof this.symbols === "string") return "a";
		return "";
	}

	generate(): string {
		console.log(this.getLetter());
		return "";
	}
}
