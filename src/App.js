import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/add-task" element={<AddTask />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
