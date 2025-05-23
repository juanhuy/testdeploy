import Router from "express";
import {UserController} from "../controllers/UserController";

const router = Router();
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/create", UserController.createUser);
router.put("/:id/update", UserController.updateUser);
router.delete("/:id/delete", UserController.deleteUser);
router.post("/:id/address", UserController.addUserAddress);

export default router;

