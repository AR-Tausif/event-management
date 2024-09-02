import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    eventDate: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    participants: [{ type: String }],
  },
  {
    versionKey: false,
  }
);

// check for time conflicts
eventSchema.statics.isTimeConflict = async function (
  location,
  eventDate,
  startTime,
  endTime
) {
  const events = await this.find({
    location,
    eventDate,
    $or: [{ startTime: { $lt: endTime }, endTime: { $gt: startTime } }],
  });
  return events.length > 0;
};

const Event = mongoose.model("Event", eventSchema);
export default Event;
