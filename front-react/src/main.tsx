import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import "./app/style/font/stylesheet.css"
import "./app/style/style.scss"
import { router } from './app/router.tsx';
import FeedbackForm from './widgets/FeedbackForm/FeedbackForm.tsx';
import Modal from './shared/hocs/Modal.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Modal ><FeedbackForm /></Modal>
  <RouterProvider router={router} />,
)
