import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AddRest from "./components/Add";
import Header from "./components/Header";
import UpdateRest from "./components/Update";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-rest" element={<AddRest />} />
          <Route path="/update-rest/:id" element={<UpdateRest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
