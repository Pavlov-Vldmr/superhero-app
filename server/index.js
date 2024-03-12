const express = require("express");

const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();

const PORT = 5000;
// здесь мы указываем адрес нашего сервера
const API_SERVICE_URL = "http://localhost:5000";
// прописываем следующую строку, если используется незашифрованное соединение
// это серьезная брешь в безопасности, следует использовать только на этапе
// разработки, и никогда в продакшене process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// require("./routes")(app);

app.use(cors());
app.use(
  "/superheroapi.com/api/7122638917832984/123",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    ws: true,
    logLevel: "debug",
  })
);

app.get("/superheroapi.com/api/7122638917832984/123", function (req, res) {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log(`Starting Proxy Server at ${PORT}`);
});
