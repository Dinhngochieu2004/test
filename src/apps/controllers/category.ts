import express from "express";
import CategoryModel from "../models/category";

class CategoryController {
    async index(req: express.Request, res: express.Response){
        try {
            const categories = await CategoryModel.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default CategoryController;
