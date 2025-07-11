"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4002;
const mongoDB_Url = process.env.DB_URL;
mongoose_1.default
    .connect(mongoDB_Url)
    .then(() => {
    console.log("DataBase connected");
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
})
    .catch((err) => {
    console.error("MongoDB connection failed", err);
});
