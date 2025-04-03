import express from "express";
const router = express.Router();
// import controllers
import CategoryController from "../apps/controllers/category";
const categoryController = new CategoryController();
// Api
router.get("/categories", categoryController.index);
export default router;