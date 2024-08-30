import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation'; /* Optional, for navigation arrows */
import 'swiper/css/pagination'; /* Optional, for pagination dots */


function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
