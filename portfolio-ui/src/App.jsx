import './App.css'
import Index from './pages/Index';
import Projects from './pages/Projects'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Index />
    },
    {
      path: "/resume",
      element: <Resume />
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
