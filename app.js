import config from "./src/config/index.js";
import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";

// define app from express
const app = express();
// define parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const origins = config.frontend_origin?.split(" ");

// here implement cors origin issue
app.use(
  cors({
    origin: origins,
    credentials: true,
  })
);

// application routes
app.use(router);

// send response for root level route
app.get("/", (req, res) => {
  res.send(`Event-booking-management-system server is running`);
});

// handling error for application error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  const errorMessage = err.value + ` `;
  return res.status(statusCode).json({
    success: false,
    errorMessage,
    message,
    errorDetails: err,
    stack: config.node_env == "development" ? err.stack : null,
  });
});

// handling error for not found api's
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "API NOT FOUND",
  });
});

export default app;
