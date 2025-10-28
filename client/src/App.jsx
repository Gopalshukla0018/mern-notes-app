
import Home from "./Componants/home"
import LoginPage from "./Componants/login";
import { Navbar } from "./Componants/Navbar";
import { createBrowserRouter , RouterProvider } from "react-router-dom";


const appRouter=createBrowserRouter([
  {
    path:"/",
    element: (
    <>
    <Navbar/>
    <Home/> 
    </>)
  },
  {
    path:"/login",
    element:(
      <>
      <Navbar/>
      <LoginPage/>
      </>
    )
  }
])

function App(){
  return(
    <>
  
  <main>
   
   <RouterProvider  router = {appRouter}/>
  </main>
 

    </>
  )
}
export default App;
