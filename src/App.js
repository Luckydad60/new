import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css"
import AddPhrase from "./components/pages/AddPhrase";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Home  />}/>
      <Route path="/connect" element={<AddPhrase  />} />
      <Route path="/connect/:id" element={<AddPhrase  />} />
    </Routes>
    </>
      
  );
}

export default App;