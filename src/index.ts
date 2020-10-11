import { Password } from "./Classes/Pass";
import { readFile } from "fs";
import minify from "jsonminify";

import { ISettings } from "./types";

readFile("src/settings.json", "utf-8", (err, res) => {
	if (err) throw err;
	const settings: ISettings = JSON.parse(minify(res));
	const pass = new Password(settings.length, settings.symbols);
	for (let i = 0; i < settings.number; i++) {
		console.log(`
    Password number ${i + 1}:
      ${pass.generate()}
		`);
	}
});
