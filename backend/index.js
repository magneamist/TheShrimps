import express from "express";
import cors from "cors";

import userDetailRoutes from "./routes/userDetailRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

const port = process.env.PORT || 8080;
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", itemRoutes);
app.use("/api", userDetailRoutes);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "404 Not Found",
  });
});

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Servidor en ejecución en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();