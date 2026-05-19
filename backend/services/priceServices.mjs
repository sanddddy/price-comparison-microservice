import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "../data/prices.json");

export const fetchPrice = async (productName) => {
    const data = await fs.readFile(dataPath, "utf-8");
    const items = JSON.parse(data);

    return items.filter(item => item.name.toLowerCase() === productName.toLowerCase());

};


