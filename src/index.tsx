import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from 'components/App/App';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginForm from 'components/auth/loginForm';
import RegistrationForm from 'components/auth/registrationForm';
import HomePage from 'components/HomePage/HomePage';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '*',
    element: <HomePage/>,
  },
  {
    path: `/login`,
    element: <LoginForm/>,
    
  },
  {
    path: `/register`,
    element: <RegistrationForm/>,
  },
  { 
    path: '/dashboard',
    element: <App/>,
  }

])

root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

