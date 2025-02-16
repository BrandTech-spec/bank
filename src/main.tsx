import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import IntlProviderComponent from "./provider/IntlProvider.tsx";
import TanstackProvider from "./provider/TanstackProvider.tsx";
import ChatConvexProvider from "./provider/ConvexProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>
      <ChatConvexProvider>
        <IntlProviderComponent>
          <App />
        </IntlProviderComponent>
      </ChatConvexProvider>
    </TanstackProvider>
  </StrictMode>
);
