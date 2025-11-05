import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000
app.use(cors("*"));

app.get("/api/msg", (_, res) => {
    res.status(200).json({ msg: "hello deployment form the backend" })
});

app.listen(PORT, () => console.log(`app is running http://13.50.250.229:${PORT}`));