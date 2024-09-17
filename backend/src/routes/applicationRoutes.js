import express from "express";
import {
  createApplication,
  deleteApplication,
  getApplication,
  getApplications,
  updateApplication,
} from "../controllers/application/applicationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/application/create", protect, createApplication);
router.get("/applications", protect, getApplications);
router.get("/application/:id", protect, getApplication);
router.patch("/application/:id", protect, updateApplication);
router.delete("/application/:id", protect, deleteApplication);

export default router;
