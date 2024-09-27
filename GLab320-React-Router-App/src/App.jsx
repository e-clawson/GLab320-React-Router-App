import "./App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";

export default function App () {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
      </Routes>
    </div>
  );
}