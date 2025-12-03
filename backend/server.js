const express = require("express");
const cors = require("cors");
const auth_Router = require("./router/auth_router");
const contact_Router = require("./router/Contact_route");
const admin_Router = require("./router/final_router");
const ConnectDB = require("./Controller/Database/mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const __dirname1 = path.resolve();

//middlewear
app.use(express.json());
// CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));


//api
app.use("/api/auth", auth_Router);
app.use("/api/form", contact_Router);
app.use("/api/admin", admin_Router);

// Serve frontend
app.use(express.static(path.join(__dirname1, "/frontend/dist")));

// catch-all route for SPA
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  ConnectDB();
});
