import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import NotFound from "./pages/NotFound";

/**
 * App Component uses the React Router to handle routing and renders different components based on the URL path.
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:login" element={<Repos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
