import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(conn.connection.host);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1); // process code 1 code means exit with failure, 0 means success.
  }
};