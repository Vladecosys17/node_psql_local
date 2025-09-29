import { Router } from "express";
import {
  updateUser,
  deleteUser,
  createUser,
  getUser,
  getUsers,
} from "../controllers/user.controllers.js";
const router = Router();

router.get("/users", getUsers);

router.get("/users/:userId", getUser);

router.post("/users", createUser);

router.delete("/users/:userId", deleteUser);

router.put("/users/:userId", updateUser);

export default router;
