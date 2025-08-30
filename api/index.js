import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});



app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'INternal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
})