import express from "express";
import cors from "cors";
import serviceRoutes from "./routes/serviceRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/services", serviceRoutes);

export default app;
