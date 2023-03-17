import mongoose from "mongoose";

const connectDb = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connection established"))
    .catch((err) => {
      console.log("DB connection failed");
      console.log(err);
    });
};

export default connectDb;
