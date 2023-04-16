import { Router } from "express";
import {
  deleteContact,
  getContact,
  postContact,
  putContact,
} from "../controllers/contactController.js";

const router = Router();

router.route("/").get(getContact).post(postContact);

router.route("/:id").put(putContact).delete(deleteContact);

export default router;
