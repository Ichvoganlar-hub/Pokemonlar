import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sevimlilar from "./pages/Sevimlilar.jsx";
import Korzinka from "./pages/Korzinka.jsx";
import Sotuvchibolish from "./pages/Sotuvchibolish.jsx";
import Topshirishpunktiniochish from "./pages/Topshirishpunktiniochish.jsx";
import HomePage from "./components/home/HomePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Savoljavob from "./pages/Savoljavob.jsx";
import ProductPage from "./pages/ProductPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div className="p-10 text-red-600 text-xl">404 | Sahifa topilmadi</div>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/category/:filterName",
        element: <HomePage />
      },
      {
        path: "/sevimlilar",
        element: <Sevimlilar />
      },
      {
        path: "/korzinka",
        element: <Korzinka />
      },
      {
        path: "/sotuvchibolish",
        element: <Sotuvchibolish />
      },
      {
        path: "/topshirish-punkti",
        element: <Topshirishpunktiniochish />
      },
      {
        path: "/savol-javob",
        element: <Savoljavob />
      },
      {
        path: "product/:id",
        element: <ProductPage />
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
