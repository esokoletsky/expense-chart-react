import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkBrown: "hsl(25, 47%, 15%)",
    mediumBrown: "hsl(28, 10%, 53%)",
    cream: "hsl(27, 66%, 92%)",
    VeryPaleOrange: "hsl(33, 100%, 98%)",
    softRed: "hsl(10, 79%, 65%)",
    cyan: "hsl(186, 34%, 60%)",
  },
  fonts: {
    body: "DM Sans",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
