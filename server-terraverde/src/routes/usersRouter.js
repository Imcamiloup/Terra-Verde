import { Router } from "express";
import {
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByDNIHandler,
  updateUserHandler,
  deleteUserHandler,
  registerHandler,
  loginHandler,
  updateProfileHandler,
  genereteAuth0User,
  getUserByNameHandler,
} from "../handlers/userHandler.js";
//import { confirmEmail } from "../services/email/sendgridController.js";
//import { authenticateToken } from "../utils/helperToken/authenticateToken.js";
//import { resetPassword , requestPasswordReset } from "../email/resetPassword.js";

const usersRouter = Router();

usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:id", getUserByIdHandler);
usersRouter.get("/dni/:dni", getUserByDNIHandler);
//usersRouter.get("/email-confirmation/:verificationCode", confirmEmail);
usersRouter.get ("/name",getUserByNameHandler);
usersRouter.post("/register", registerHandler);
usersRouter.post("/register-auth0", genereteAuth0User);
usersRouter.post("/login", loginHandler);
//usersRouter.patch("/reset-password", resetPassword);
//usersRouter.post("/request-password-reset", requestPasswordReset);
usersRouter.patch("/:id", updateUserHandler);
usersRouter.patch("/profile/:id", updateProfileHandler)
usersRouter.delete("/:id", deleteUserHandler);

export default usersRouter;
