import Router from "express";
import {UserController} from "../controllers/UserController";


/*<<<<<<< HEAD
export default function UserRouter(keycloak: any) {
    const router = Router();
    router.get("/:id", keycloak.protect(), UserController.getUserById)
    router.get("/", keycloak.protect((token: any, req: any) =>{
        return token.hasRole("realm:express-admin");
    }), UserController.getAllUsers);
    router.put("/:id/update", keycloak.protect(), UserController.updateUser);
    router.delete("/:id/delete", keycloak.protect(), UserController.deleteUser);
    router.post("/:id/address", keycloak.protect(), UserController.addUserAddress);
    return router;
};
*/
// const router = Router();
// router.get("/", UserController.getAllUsers);
// router.get("/:id", UserController.getUserById);
// router.post("/create", UserController.createUser);
// router.put("/:id/update", UserController.updateUser);
// router.delete("/:id/delete", UserController.deleteUser);
// router.post("/:id/address", UserController.addUserAddress);
// export default router;

const router = Router();
router.get("/count", UserController.getUserCount);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/create", UserController.createUser);
router.put("/:id/update", UserController.updateUser);
router.delete("/:id/delete", UserController.deleteUser);
router.post("/:id/address", UserController.addUserAddress);

export default router;

