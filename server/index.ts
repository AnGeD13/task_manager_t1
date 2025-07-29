import express, {Express} from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use('/api', taskRoutes);
app.use(errorHandler);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})