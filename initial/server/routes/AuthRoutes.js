import {Router} from "express";
import {checkeUser} from "../controllers/AuthController.js";


const router = Router()

router.post("/check-user",checkUser);

export default router;
