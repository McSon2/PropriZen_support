const express = require("express");
const path = require("path");
const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Routes pour les pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/support", (req, res) => {
  res.sendFile(path.join(__dirname, "support.html"));
});

app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "privacy-policy.html"));
});

// Gérer les 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
