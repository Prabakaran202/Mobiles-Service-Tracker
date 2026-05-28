import express from "express";
import {
  saveRecord,
  getRecords,
} from "../controllers/serviceController.js";

const router = express.Router();

router.post("/save", saveRecord);
router.get("/list", getRecords);

export default router;
