import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log("Hi from", process.cwd());
console.log("Hi from", path.dirname(__filename).split(path.sep).slice(4).join('/'));
