import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./components/todo/List";
import Add from "./components/todo/Add";
import Edit from "./components/todo/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
