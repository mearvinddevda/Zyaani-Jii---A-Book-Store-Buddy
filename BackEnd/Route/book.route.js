import express from "express";
import { getBook } from "../Controller/book.controler.js";

const router = express.Router();
router.get("/",getBook)

export default router;
