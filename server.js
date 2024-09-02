import app from "./app.js";
import config from "./src/config/index.js";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.database_url);
    // await mongoose.connect(config.local_database_url as string);

    app.listen(config.port, () => {
      console.log(
        `Meeting-room-booking-system database and server is running on port http://localhost:${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
main();
