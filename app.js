import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/contactsRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import dbConnection from "./config/dbConnection.js";

dbConnection();
dotenv.config();
const app = express();
const port = process.env.port;

app.use(express.json());
app.use(errorHandler);
app.use("/api/contact/", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
