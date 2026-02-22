import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sevimlilar from "./pages/Sevimlilar.jsx";
import Korzinka from "./pages/Korzinka.jsx";
import Sotuvchibolish from "./pages/sotuvchibolish.jsx";
import Topshirishpunktiniochish from "./pages/Topshirishpunktiniochish.jsx";
import Home from './ReyComponents/Home.jsx'

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
        path:"/",
        element:<Home />
      },
      {
        path:"/category/:filterName",
        element:<Home />
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
        path: "/Sotuvchibolish",
        element: <Sotuvchibolish />
      },
      {
        path: "/topshrishpunktiniyaratsih",
        element: <Topshirishpunktiniochish />
      },
      {
        path: "/savoljavob",
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
