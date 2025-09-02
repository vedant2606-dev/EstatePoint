import express from "express";
import { updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello");
});
router.post("/update/:id",verifyToken, updateUser);

export default router;
