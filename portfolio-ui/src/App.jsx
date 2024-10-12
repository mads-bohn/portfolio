import './App.css'
import Index from './pages/Index';
import Projects from './pages/Projects'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Index />
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
