import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import 'swiper/css';
import "./app/style/font/stylesheet.css"
import "./app/style/style.scss"
import { router } from './app/router.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
