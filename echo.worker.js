self.onconnect = ({ ports: [port] }) => {
  port.onmessage = ({ data }) => port.postMessage(data);
};
