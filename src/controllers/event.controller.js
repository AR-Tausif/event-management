import Event from "../model/event.model.js";
// POST /events - Create a new event
const createNewEventIntoDB = async (req, res) => {
  try {
    const {
      eventName,
      eventDate,
      startTime,
      endTime,
      location,
      description,
      participants,
    } = req.body;

    // Check for time conflicts
    const hasConflict = await Event.isTimeConflict(
      location,
      eventDate,
      startTime,
      endTime
    );
    if (hasConflict) {
      return res
        .status(400)
        .json({ message: "Time conflict detected for the event" });
    }

    const newEvent = new Event({
      eventName,
      eventDate,
      startTime,
      endTime,
      location,
      description,
      participants,
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /events - List all events with pagination
const getAllEventsWithPagination = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const events = await Event.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /events/:id - Get event details by ID
const getEventDetailsById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /events/:id - Update an event by ID
const updateEventById = async (req, res) => {
  try {
    const {
      eventName,
      eventDate,
      startTime,
      endTime,
      location,
      description,
      participants,
    } = req.body;

    // Check for time conflicts
    const hasConflict = await Event.isTimeConflict(
      location,
      eventDate,
      startTime,
      endTime
    );
    if (hasConflict) {
      return res
        .status(400)
        .json({ message: "Time conflict detected for the event" });
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      {
        eventName,
        eventDate,
        startTime,
        endTime,
        location,
        description,
        participants,
      },
      { new: true }
    );
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /events/:id - Delete an event by ID
const deleteEventById = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /events/:id/participants - Add participants to an event
const addParticipantsToAnEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const { participants } = req.body;
    event.participants.push(...participants);
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /events/:id/participants/:participantId - Remove a participant from an event
const deleteParticipantsFromEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.participants = event.participants.filter(
      (participant) => participant !== req.params.participantId
    );
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const eventController = {
  createNewEventIntoDB,
  getAllEventsWithPagination,
  getEventDetailsById,
  updateEventById,
  deleteEventById,
  addParticipantsToAnEvent,
  deleteParticipantsFromEvent,
};
