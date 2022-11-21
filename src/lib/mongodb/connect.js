import mongoose from "mongoose";

export let isConnected = 0;

export const connectDB = async () => {
  if (isConnected === 1) return;
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
  }
}