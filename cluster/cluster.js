const cluster = require("cluster");
const os = require("os");
const server = require("../index.js");
require("dotenv").config();

const numCPUs = os.cpus().length;
if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} falhou. Criando...`);
    cluster.fork();
  });
} else {
  server.listen(process.env.PORT, () =>
    console.log(`Servidor rodando no processo ${process.pid}`)
  );
}
