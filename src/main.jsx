import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import {  HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <>

    <HelmetProvider>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </StrictMode>
    </HelmetProvider>
  </>
);
