import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, "../server/.env") });
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import app from "../server/index.js";

export default app;
