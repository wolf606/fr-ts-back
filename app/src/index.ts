import express from "express";
import cors from "cors";
import 'dotenv/config'
import { MongoClient } from "mongodb";
import { hi } from "./controller/hello";

const app = express();
app.use(cors());
app.use(express.json());

hi();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
console.log("MongoDB URI:", uri);
const client = new MongoClient(uri);

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