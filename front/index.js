import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 9003;

// __dirname'ni to'g'ri aniqlash
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Statik fayllarni xizmat qilish
app.use(express.static(path.join(__dirname, "dist")));


// Barcha boshqa yo'llar uchun index.html'ni yuborish
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Serverni tinglash
const server=app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
server.timeout = 4500000;