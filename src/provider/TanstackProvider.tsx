import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React from "react";

// Create a client
const queryClient = new QueryClient();

function TanstackProvider({ children }: { children: React.ReactNode }) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackProvider;
