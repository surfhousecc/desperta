import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Frame } from "./screens/Frame";
import { ToastProvider } from "./components/ui/toast";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ToastProvider>
      <Frame />
    </ToastProvider>
  </StrictMode>,
);
