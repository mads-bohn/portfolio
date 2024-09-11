import './App.css'
import Index from './pages'
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
      path: "/about",
      element: <About />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/resume",
      element: <Resume />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
