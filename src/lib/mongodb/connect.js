import mongoose from "mongoose";

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) return;
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
  }
}

export default connectDB