import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  const { MONGO_URI } = ENV;
  if (!MONGO_URI) {
    console.warn(
      "MONGO_URI is not set — skipping MongoDB connection. Set MONGO_URI in backend/.env or as an environment variable."
    );
    return null;
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED:", conn.connection.host);
    return conn;
  } catch (error) {
    console.error("Error connecting to MONGODB:", error);
    return null;
  }
};
