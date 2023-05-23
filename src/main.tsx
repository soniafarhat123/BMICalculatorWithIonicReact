import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Storage, Drivers } from "@ionic/storage";

//const store = new Storage({ name: "__mydb", driverOrder: [Drivers.IndexedDB] });
//await store.create();
//await store.set("name", { id_document: "3123AZEA", name: "ajdajhjk" });
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
