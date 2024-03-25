import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import 'swiper/css';
import "./app/style/font/stylesheet.css"
import "./app/style/style.scss"
import { router } from './app/router.tsx';
import FormRegister from './entites/user/ui/FormRegister.tsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import FormLogin from './entites/user/ui/FormLogin.tsx';
import ConsultationForm from './widgets/ConsultationForm/ConsultationForm.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* <ConsultationForm /> */}
    {/* <FormRegister /> */}
    {/* <FormLogin /> */}
  // <RouterProvider router={router} />,
  </Provider>
)
