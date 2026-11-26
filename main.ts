import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

const JOKE_OPEN = "My ice dispenser launches cubes ";
const JOKE_MIDDLE = "across the kitchen like it has ";
const JOKE_CLOSE = "a grudge against the floor.";

const ENTRY = JOKE_OPEN + JOKE_MIDDLE + JOKE_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
