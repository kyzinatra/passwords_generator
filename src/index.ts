import { Password } from "./pass";
import { readFile } from "fs";
import minify from "jsonminify";

import { ISettings } from "./types";

readFile("src/settings.json", "utf-8", (err, res) => {
	if (err) throw err;
	const settings: ISettings = JSON.parse(minify(res));
	new Password(settings.length, settings.symbols).generate();
});
// console.log(Password.generate());
