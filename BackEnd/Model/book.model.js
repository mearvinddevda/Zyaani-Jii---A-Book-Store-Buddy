import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // Adjusted to lowercase and required
    title: { type: String } // Assuming title is optional
});

const Book = mongoose.model("Book", bookSchema); // Adjusted model name to singular and capitalized

export default Book;
