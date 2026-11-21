import EchoWorker from "./echo.worker.js";

const result = document.querySelector("output");
try {
  const { port } = new EchoWorker();
  port.onmessage = ({ data }) => {
    result.textContent = data;
    port.close();
  };
  port.postMessage("pong");
} catch (error) {
  result.textContent = error.toString();
}
