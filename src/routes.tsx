import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Equipments from "./pages/Equipments";
import Aboutceo from "./pages/Aboutceo";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import CeoPage from "./pages/CeoPage";

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
        {
          path:"/ceo",
          element:<CeoPage/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/terms",
          element:<Terms/>
        },
        {
          path:"/privacy",
          element:<Privacy/>
        },
        {
          path:"/faqs",
          element:<Faqs/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
      ]
    },
  ]);


export default router;