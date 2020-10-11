export class Random {
	//! Недетерминированная функция
	public static get(borders: Array<[number, number]>): number {
		let numbers: number[] = [];
		borders.forEach(a => {
			numbers.push(
				...Array.from({ length: Math.max(...a) - Math.min(...a) }, (_, i) => i + Math.min(...a))
			);
		});
		numbers = [...new Set(numbers)];
		return this.fromArray(numbers);
	}

	//! Недетерминированная функция
	public static fromArray(arr: any[]): number {
		return arr[~~(Math.random() * (arr.length + 1))];
	}
}
