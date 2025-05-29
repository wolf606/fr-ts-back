"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongodb_1 = require("mongodb");
const hello_1 = require("./controller/hello");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, hello_1.hi)();
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
console.log("MongoDB URI:", uri);
const client = new mongodb_1.MongoClient(uri);
async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
    finally {
        await client.close();
    }
}
run().catch(console.error);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`We are up and running on port ${PORT}`));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
