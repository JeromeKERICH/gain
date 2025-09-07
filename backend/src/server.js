require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/db");

const authRoutes = require("./routes/auth");
const paymentRoutes = require("./routes/paymentsRoutes");
const ticketRoutes = require("./routes/ticketsRoutes");
const adminRoutes = require("./routes/admin");
const errorHandler = require("./middlewares/errorHandler");

const app = express();


app.use(cors({
  origin:  process.env.FRONTEND_URL, // your frontend port
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json()); // default parser

app.get("/", (req, res) => res.send("GAIN API running 🚀"));

app.use("/api/auth", authRoutes);
app.use("/api/payments", require("./routes/paymentsRoutes"));
app.use("/api/tickets", ticketRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
