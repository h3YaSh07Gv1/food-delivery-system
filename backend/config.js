import dotenv from "dotenv";
dotenv.config();

export const ADMIN_URL = process.env.NODE_ENV === "development"?"http://localhost:5174":"https://food-delivery-system-admin-ugml.onrender.com";