import { Router } from "express";
import { eventController } from "../controllers/event.controller.js";
const router = Router();
// POST /events - Create a new event.
router.post("/", eventController.createNewEventIntoDB);
// GET /events - List all events.
router.get("/", eventController.getAllEventsWithPagination);
// GET /events/:id - Get details of a specific event by ID.
router.get("/:id", eventController.getEventDetailsById);
// PUT /events/:id - Update an event by ID.
router.put("/:id", eventController.updateEventById);
// DELETE /events/:id - Delete an event by ID.
router.delete("/:id", eventController.deleteEventById);
// POST /events/:id/participants - Add participants to an event.
router.post("/:id/participants", eventController.addParticipantsToAnEvent);
// DELETE /events/:id/participants/:participantId - Remove a participant from an event.
router.delete(
  "/:id/participants/:participantId",
  eventController.deleteParticipantsFromEvent
);

export const eventRouter = router;
