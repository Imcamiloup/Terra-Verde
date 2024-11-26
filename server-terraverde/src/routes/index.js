import { Router } from "express";
import usersRouter from "./usersRouter.js";
import eventsRouter from "./eventsRouter.js";


const router = Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Here we define the routes
router.use("/users", usersRouter);
router.use("/events", eventsRouter);


export default router;
