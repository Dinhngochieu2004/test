import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);
const CategoryModel = mongoose.model("Categories", categorySchema, "categories");
export default CategoryModel;