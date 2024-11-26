import { Router } from "express";
import {
  getAllEventsHandler,
  getEventsByIdHandler,
  createEventsHandler,
  updateEventsHandler,
  deleteEventsHandler,
} from "../handlers/eventsHandler.js";
const eventsRouter = Router();

eventsRouter.get("/", getAllEventsHandler);
eventsRouter.get("/:id", getEventsByIdHandler);
eventsRouter.post("/register", createEventsHandler);
eventsRouter.put("/:id", updateEventsHandler);
eventsRouter.delete("/:id", deleteEventsHandler);

export default eventsRouter;
