import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#4255ff",
          borderRadius: 5,
          colorText: "#fffff",
          colorTextPlaceholder: "white",
          // Alias Token
          colorBgContainer: "#2e3856",
          colorBgSpotlight: "#2e3856",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
