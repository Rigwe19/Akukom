import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import './App.css'
import './style.css'
import Article from './Pages/Article.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  }, {
    path: "article/:slug",
    element: <Article />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
