import dotenv from "dotenv";
dotenv.config();

export const ADMIN_URL = process.env.NODE_ENV === "development"?"http://localhost:5173":"https://food-delivery-system-5x3i.onrender.com";
