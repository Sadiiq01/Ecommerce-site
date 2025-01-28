import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.tsx";
import ShopContextProvide from "./shopContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ShopContextProvide>
        <RouterProvider router={router}></RouterProvider>
      </ShopContextProvide>
    </QueryClientProvider>
  </StrictMode>
);
