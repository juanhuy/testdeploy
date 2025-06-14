import Router from "express";
import {UserController} from "../controllers/UserController";
// import {authMiddleware} from "../middleware/authMiddleware";

const router = Router();
<<<<<<< HEAD
router.get("/count", UserController.getUserCount);
=======
// router.post("/current", UserController.getCurrentUser);
>>>>>>> origin/cuong_routes
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/create", UserController.createUser);
router.put("/:id/update", UserController.updateUser);
router.delete("/:id/delete", UserController.deleteUser);
router.post("/:id/address", UserController.addUserAddress);

export default router;

