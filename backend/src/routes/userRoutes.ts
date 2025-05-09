import Router from "express";
import {UserController} from "../controllers/UserController";
// import {authMiddleware} from "../middleware/authMiddleware";

// export default function UserRouter() {
//     const router = Router();
//     router.post("/current", UserController.getCurrentUser);
//     router.get("/", UserController.getAllUsers);
//     router.put("/:id/update", UserController.updateUser);
//     router.delete("/:id/delete", UserController.deleteUser);
//     router.post("/:id/address", UserController.addUserAddress);
//     return router;
// };

const router = Router();
router.post("/current", UserController.getCurrentUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/create", UserController.createUser);
router.put("/:id/update", UserController.updateUser);
router.delete("/:id/delete", UserController.deleteUser);
router.post("/:id/address", UserController.addUserAddress);
export default router;
