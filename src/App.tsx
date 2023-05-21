import { Routes, Route } from "react-router-dom";

import { Menu } from "./template/Menu";
import { Home, About } from "./pages";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
