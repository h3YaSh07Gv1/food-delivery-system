import express from "express"
import cors from "cors"
import "dotenv/config"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = process.env.PORT|| 4000;

// middleware
app.use(express.json())
//  const allowedOrigins = [
//       'https://food-delivery-system-5x3i.onrender.com/',
//       'https://food-delivery-system-admin-ugml.onrender.com'
//     ];

//     // Configure CORS options
//     const corsOptions = {
//       origin: function (origin, callback) {
//         // Allow requests with no origin (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//           const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//           return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//       },
//       credentials: true, // Allow cookies and authentication headers to be sent
//       methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
//       preflightContinue: false,
//       optionsSuccessStatus: 204
//     };

//     // Apply the CORS middleware with the defined options
// app.use(cors(corsOptions));
app.use(cors());
//db connection
connectDB();


//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


