import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Products />} path="/products"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
