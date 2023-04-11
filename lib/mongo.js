// /lib/dbConnect.js
import mongoose from "mongoose";

const URI = process.env.DB_URL;

const dbConnect = async () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connection Successful");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default dbConnect;
