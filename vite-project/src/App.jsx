import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read From "./pages/read.jsx"
import Create From "./pages/create.jsx"




const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route element={<Read />} to="/">
            <Route element={<Create />} to="/Create">
            </Routes>
          </BrowserRouter>
        </div>
        )
};


        export default App;