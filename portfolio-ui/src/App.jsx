import './App.css'
import Index from './pages'
import Projects from './pages/Projects'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Index />
    },
    {
      path: "/projects",
      element: <Projects />
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
