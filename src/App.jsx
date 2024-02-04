import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes/Routes";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimCursor from "./components/AnimCursor/AnimCursor";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <AnimCursor></AnimCursor>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
