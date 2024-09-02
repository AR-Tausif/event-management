import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  frontend_origin: process.env.FRONTEND_ORIGIN,
  local_database_url: process.env.LOCAL_DATABASE_URL,
  database_url: process.env.DATABASE_URL,
};
