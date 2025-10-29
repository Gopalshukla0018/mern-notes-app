import Home from "./Componants/home";
import LoginPage from "./Componants/login";
import { Navbar } from "./Componants/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./Componants/signupPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <SignupPage />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={appRouter} />
      </main>
    </>
  );
}
export default App;
