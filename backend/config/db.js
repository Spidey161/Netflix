import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";
import { DB_NAME } from "../constants.js";


export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		process.exit(1); // 1 means there was an error, 0 means success
	}
};
