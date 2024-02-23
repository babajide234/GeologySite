import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Equipments from "./pages/Equipments";
import Aboutceo from "./pages/Aboutceo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/equipment",
          element:<Equipments/>
        },
        {
          path:"/about-ceo",
          element:<Aboutceo/>
        },
      ]
    },
  ]);


export default router;